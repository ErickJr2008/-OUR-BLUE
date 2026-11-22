import hashlib
import json
import logging
import os
import re
import secrets
import sqlite3
import uuid
from datetime import datetime, timedelta, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parent
DATABASE_PATH = Path(
    os.environ.get(
        "OUR_BLUE_DB_PATH",
        str(Path.home() / ".our-blue" / "our-blue.sqlite3"),
    )
)
PORT = int(os.environ.get("OUR_BLUE_PORT", "8081"))
CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
CODE_LENGTH = 16
INVITATION_TTL = timedelta(hours=24)
CODE_PATTERN = re.compile(rf"^[{CODE_ALPHABET}]{{{CODE_LENGTH}}}$")

SCHEMA = """
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS accounts (
    id TEXT PRIMARY KEY,
    token_hash TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS invitations (
    id TEXT PRIMARY KEY,
    code_hash TEXT NOT NULL UNIQUE,
    owner_account_id TEXT NOT NULL REFERENCES accounts(id),
    created_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    consumed_at TEXT,
    canceled_at TEXT
);
CREATE UNIQUE INDEX IF NOT EXISTS one_active_invitation_per_account
    ON invitations(owner_account_id)
    WHERE consumed_at IS NULL AND canceled_at IS NULL;
CREATE INDEX IF NOT EXISTS invitations_by_expiry ON invitations(expires_at);
CREATE TABLE IF NOT EXISTS pair_members (
    account_id TEXT PRIMARY KEY REFERENCES accounts(id),
    partner_id TEXT NOT NULL UNIQUE REFERENCES accounts(id),
    CHECK (account_id <> partner_id)
);
"""


class ServiceError(Exception):
    def __init__(self, status, message):
        super().__init__(message)
        self.status = status


def utc_now():
    return datetime.now(timezone.utc)


def timestamp(value):
    return value.isoformat(timespec="seconds")


def database_connection(database_path=None):
    path = Path(database_path or DATABASE_PATH)
    path.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(path, timeout=10, isolation_level=None)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    connection.execute("PRAGMA busy_timeout = 10000")
    connection.executescript(SCHEMA)
    return connection


def digest(value):
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def create_account(database_path=None):
    account_id = str(uuid.uuid4())
    token = secrets.token_urlsafe(32)
    connection = database_connection(database_path)
    try:
        connection.execute(
            "INSERT INTO accounts (id, token_hash, created_at) VALUES (?, ?, ?)",
            (account_id, digest(token), timestamp(utc_now())),
        )
    finally:
        connection.close()
    return {"accountId": account_id, "token": token}


def authenticated_account(connection, token):
    if not isinstance(token, str) or not token:
        raise ServiceError(401, "Se requiere una cuenta autenticada.")
    account = connection.execute(
        "SELECT id FROM accounts WHERE token_hash = ?", (digest(token),)
    ).fetchone()
    if not account:
        raise ServiceError(401, "La sesión de esta cuenta no es válida.")
    return account["id"]


def create_invitation(token, database_path=None):
    connection = database_connection(database_path)
    try:
        connection.execute("BEGIN IMMEDIATE")
        owner_id = authenticated_account(connection, token)
        if connection.execute(
            "SELECT 1 FROM pair_members WHERE account_id = ?", (owner_id,)
        ).fetchone():
            raise ServiceError(409, "Esta cuenta ya está vinculada.")

        now = utc_now()
        now_text = timestamp(now)
        connection.execute(
            """UPDATE invitations SET canceled_at = ?
               WHERE owner_account_id = ?
                 AND consumed_at IS NULL AND canceled_at IS NULL
                 AND expires_at <= ?""",
            (now_text, owner_id, now_text),
        )
        connection.execute(
            """UPDATE invitations SET canceled_at = ?
               WHERE owner_account_id = ?
                 AND consumed_at IS NULL AND canceled_at IS NULL""",
            (now_text, owner_id),
        )

        expires_at = timestamp(now + INVITATION_TTL)
        for _ in range(20):
            code = "".join(secrets.choice(CODE_ALPHABET) for _ in range(CODE_LENGTH))
            try:
                connection.execute(
                    """INSERT INTO invitations
                       (id, code_hash, owner_account_id, created_at, expires_at)
                       VALUES (?, ?, ?, ?, ?)""",
                    (
                        str(uuid.uuid4()),
                        digest(code),
                        owner_id,
                        now_text,
                        expires_at,
                    ),
                )
                connection.commit()
                return {"code": code, "expiresAt": expires_at}
            except sqlite3.IntegrityError as error:
                if "code_hash" not in str(error):
                    raise
        raise ServiceError(503, "No se pudo generar un código único; inténtalo de nuevo.")
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def accept_invitation(token, code, database_path=None):
    if not isinstance(code, str):
        raise ServiceError(400, "El código no tiene un formato válido.")
    normalized_code = code.strip().upper()
    if not CODE_PATTERN.fullmatch(normalized_code):
        raise ServiceError(400, "El código no tiene un formato válido.")

    connection = database_connection(database_path)
    try:
        connection.execute("BEGIN IMMEDIATE")
        recipient_id = authenticated_account(connection, token)
        invitation = connection.execute(
            """SELECT id, owner_account_id, expires_at, consumed_at, canceled_at
               FROM invitations WHERE code_hash = ?""",
            (digest(normalized_code),),
        ).fetchone()
        if not invitation:
            raise ServiceError(404, "El código no existe o ya no está disponible.")
        if invitation["consumed_at"] or invitation["canceled_at"]:
            raise ServiceError(409, "Este código ya se utilizó o fue cancelado.")
        now_text = timestamp(utc_now())
        if invitation["expires_at"] <= now_text:
            connection.execute(
                "UPDATE invitations SET canceled_at = ? WHERE id = ?",
                (now_text, invitation["id"]),
            )
            connection.commit()
            raise ServiceError(410, "El código de invitación expiró.")

        owner_id = invitation["owner_account_id"]
        if recipient_id == owner_id:
            raise ServiceError(400, "No puedes vincular una cuenta consigo misma.")
        linked_account = connection.execute(
            "SELECT 1 FROM pair_members WHERE account_id IN (?, ?)",
            (recipient_id, owner_id),
        ).fetchone()
        if linked_account:
            raise ServiceError(409, "Una de estas cuentas ya está vinculada.")

        updated = connection.execute(
            """UPDATE invitations SET consumed_at = ?
               WHERE id = ? AND consumed_at IS NULL AND canceled_at IS NULL
                 AND expires_at > ?""",
            (now_text, invitation["id"], now_text),
        )
        if updated.rowcount != 1:
            raise ServiceError(409, "Este código ya no está disponible.")
        connection.execute(
            "INSERT INTO pair_members (account_id, partner_id) VALUES (?, ?)",
            (owner_id, recipient_id),
        )
        connection.execute(
            "INSERT INTO pair_members (account_id, partner_id) VALUES (?, ?)",
            (recipient_id, owner_id),
        )
        connection.execute(
            """UPDATE invitations SET canceled_at = ?
               WHERE owner_account_id IN (?, ?)
                 AND id <> ? AND consumed_at IS NULL AND canceled_at IS NULL""",
            (now_text, owner_id, recipient_id, invitation["id"]),
        )
        connection.commit()
        return {"partnerId": owner_id}
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def cancel_invitation(token, database_path=None):
    connection = database_connection(database_path)
    try:
        connection.execute("BEGIN IMMEDIATE")
        account_id = authenticated_account(connection, token)
        now_text = timestamp(utc_now())
        connection.execute(
            """UPDATE invitations SET canceled_at = ?
               WHERE owner_account_id = ?
                 AND consumed_at IS NULL AND canceled_at IS NULL""",
            (now_text, account_id),
        )
        connection.commit()
        return {"canceled": True}
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def get_pair(token, database_path=None):
    connection = database_connection(database_path)
    try:
        account_id = authenticated_account(connection, token)
        partner = connection.execute(
            "SELECT partner_id FROM pair_members WHERE account_id = ?",
            (account_id,),
        ).fetchone()
        return {"partnerId": partner["partner_id"] if partner else None}
    finally:
        connection.close()


def unlink_accounts(token, database_path=None):
    connection = database_connection(database_path)
    try:
        connection.execute("BEGIN IMMEDIATE")
        account_id = authenticated_account(connection, token)
        partner = connection.execute(
            "SELECT partner_id FROM pair_members WHERE account_id = ?",
            (account_id,),
        ).fetchone()
        if partner:
            now_text = timestamp(utc_now())
            connection.execute(
                """UPDATE invitations SET canceled_at = ?
                   WHERE owner_account_id IN (?, ?)
                     AND consumed_at IS NULL AND canceled_at IS NULL""",
                (now_text, account_id, partner["partner_id"]),
            )
            connection.execute(
                "DELETE FROM pair_members WHERE account_id IN (?, ?)",
                (account_id, partner["partner_id"]),
            )
        connection.commit()
        return {"unlinked": True}
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


class ApiHandler(SimpleHTTPRequestHandler):
    server_version = "OurBlue/1.0"

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "same-origin")
        super().end_headers()

    def read_json(self):
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError as error:
            raise ServiceError(400, "La solicitud no es válida.") from error
        if length < 0 or length > 4096:
            raise ServiceError(413, "La solicitud es demasiado grande.")
        try:
            value = json.loads(self.rfile.read(length) or b"{}")
        except (json.JSONDecodeError, UnicodeDecodeError) as error:
            raise ServiceError(400, "El contenido JSON no es válido.") from error
        if not isinstance(value, dict):
            raise ServiceError(400, "El contenido JSON no es válido.")
        return value

    def send_json(self, status, value):
        body = json.dumps(value, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def token(self):
        authorization = self.headers.get("Authorization", "")
        scheme, _, value = authorization.partition(" ")
        if scheme.lower() != "bearer" or not value:
            raise ServiceError(401, "Se requiere una cuenta autenticada.")
        return value

    def handle_api(self, method, path):
        if method == "GET" and path == "/api/health":
            return 200, {"ok": True}
        if method == "POST" and path == "/api/accounts":
            return 201, create_account()
        if method == "GET" and path == "/api/pair":
            return 200, get_pair(self.token())
        if method == "POST" and path == "/api/invitations":
            return 201, create_invitation(self.token())
        if method == "POST" and path == "/api/invitations/accept":
            body = self.read_json()
            return 200, accept_invitation(self.token(), body.get("code"))
        if method == "DELETE" and path == "/api/invitations/active":
            return 200, cancel_invitation(self.token())
        if method == "DELETE" and path == "/api/pair":
            return 200, unlink_accounts(self.token())
        return 404, {"error": "Ruta no encontrada."}

    def do_GET(self):
        path = urlparse(self.path).path
        if path.startswith("/api/"):
            self.dispatch_api("GET", path)
        else:
            super().do_GET()

    def do_POST(self):
        self.dispatch_api("POST", urlparse(self.path).path)

    def do_DELETE(self):
        self.dispatch_api("DELETE", urlparse(self.path).path)

    def dispatch_api(self, method, path):
        try:
            status, body = self.handle_api(method, path)
            self.send_json(status, body)
        except ServiceError as error:
            self.send_json(error.status, {"error": str(error)})
        except Exception:
            logging.exception("Fallo al procesar una solicitud de la API.")
            self.send_json(500, {"error": "Ocurrió un error interno."})


if __name__ == "__main__":
    database_connection().close()
    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
    server = ThreadingHTTPServer(("127.0.0.1", PORT), ApiHandler)
    print(f"OUR BLUE disponible en http://127.0.0.1:{PORT}")
    server.serve_forever()
