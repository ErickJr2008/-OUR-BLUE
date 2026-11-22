import concurrent.futures
import sqlite3
import tempfile
import unittest
from pathlib import Path

from server import (
    ServiceError,
    accept_invitation,
    cancel_invitation,
    create_account,
    create_invitation,
    database_connection,
    get_pair,
)


class InvitationTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.database_path = Path(self.temp_dir.name) / "test.sqlite3"

    def tearDown(self):
        self.temp_dir.cleanup()

    def make_account(self):
        return create_account(self.database_path)

    def test_simultaneous_accounts_receive_distinct_database_enforced_codes(self):
        accounts = [self.make_account() for _ in range(12)]
        with concurrent.futures.ThreadPoolExecutor(max_workers=12) as executor:
            invitations = list(executor.map(
                lambda account: create_invitation(account["token"], self.database_path),
                accounts,
            ))

        codes = [invitation["code"] for invitation in invitations]
        self.assertEqual(len(codes), len(set(codes)))

        connection = database_connection(self.database_path)
        try:
            count, distinct_count = connection.execute(
                "SELECT COUNT(*), COUNT(DISTINCT code_hash) FROM invitations"
            ).fetchone()
            self.assertEqual(count, 12)
            self.assertEqual(distinct_count, 12)
        finally:
            connection.close()

    def test_rotating_invitation_invalidates_the_previous_code(self):
        owner = self.make_account()
        recipient = self.make_account()
        first = create_invitation(owner["token"], self.database_path)
        second = create_invitation(owner["token"], self.database_path)

        self.assertNotEqual(first["code"], second["code"])
        with self.assertRaises(ServiceError) as error:
            accept_invitation(recipient["token"], first["code"], self.database_path)
        self.assertEqual(error.exception.status, 409)

    def test_cancelled_and_expired_invitations_cannot_be_accepted(self):
        owner = self.make_account()
        recipient = self.make_account()
        cancelled = create_invitation(owner["token"], self.database_path)
        cancel_invitation(owner["token"], self.database_path)
        with self.assertRaises(ServiceError) as error:
            accept_invitation(recipient["token"], cancelled["code"], self.database_path)
        self.assertEqual(error.exception.status, 409)

        expired = create_invitation(owner["token"], self.database_path)
        connection = database_connection(self.database_path)
        try:
            connection.execute(
                "UPDATE invitations SET expires_at = ? WHERE id = (SELECT id FROM invitations ORDER BY rowid DESC LIMIT 1)",
                ("2000-01-01T00:00:00+00:00",),
            )
        finally:
            connection.close()
        with self.assertRaises(ServiceError) as error:
            accept_invitation(recipient["token"], expired["code"], self.database_path)
        self.assertEqual(error.exception.status, 410)

    def test_database_unique_constraint_rejects_repeated_invitation_hashes(self):
        owner = self.make_account()
        other_owner = self.make_account()
        invite = create_invitation(owner["token"], self.database_path)
        connection = database_connection(self.database_path)
        try:
            row = connection.execute(
                "SELECT code_hash, created_at, expires_at FROM invitations"
            ).fetchone()
            with self.assertRaises(sqlite3.IntegrityError):
                connection.execute(
                    """INSERT INTO invitations
                       (id, code_hash, owner_account_id, created_at, expires_at)
                       VALUES ('duplicate-test', ?, ?, ?, ?)""",
                    (
                        row["code_hash"],
                        other_owner["accountId"],
                        row["created_at"],
                        row["expires_at"],
                    ),
                )
        finally:
            connection.close()

    def test_each_code_links_only_its_inviter_and_its_accepting_account_once(self):
        alice, bob, carla, diego = [self.make_account() for _ in range(4)]
        alice_invite = create_invitation(alice["token"], self.database_path)
        carla_invite = create_invitation(carla["token"], self.database_path)

        accept_invitation(diego["token"], carla_invite["code"], self.database_path)
        with self.assertRaises(ServiceError) as error:
            accept_invitation(carla["token"], alice_invite["code"], self.database_path)
        self.assertEqual(error.exception.status, 409)
        self.assertEqual(get_pair(carla["token"], self.database_path)["partnerId"], diego["accountId"])

        accept_invitation(bob["token"], alice_invite["code"], self.database_path)

        self.assertEqual(get_pair(alice["token"], self.database_path)["partnerId"], bob["accountId"])
        self.assertEqual(get_pair(bob["token"], self.database_path)["partnerId"], alice["accountId"])
        self.assertEqual(get_pair(carla["token"], self.database_path)["partnerId"], diego["accountId"])
        self.assertEqual(get_pair(diego["token"], self.database_path)["partnerId"], carla["accountId"])

        with self.assertRaises(ServiceError) as error:
            accept_invitation(diego["token"], alice_invite["code"], self.database_path)
        self.assertIn(error.exception.status, (404, 409))

        with self.assertRaises(ServiceError) as error:
            accept_invitation(carla["token"], alice_invite["code"], self.database_path)
        self.assertEqual(error.exception.status, 409)

    def test_account_token_is_required_and_invitation_is_single_use(self):
        owner = self.make_account()
        recipient = self.make_account()
        invite = create_invitation(owner["token"], self.database_path)

        with self.assertRaises(ServiceError) as error:
            accept_invitation("not-the-recipient-token", invite["code"], self.database_path)
        self.assertEqual(error.exception.status, 401)

        accept_invitation(recipient["token"], invite["code"], self.database_path)
        with self.assertRaises(ServiceError) as error:
            accept_invitation(self.make_account()["token"], invite["code"], self.database_path)
        self.assertEqual(error.exception.status, 409)


if __name__ == "__main__":
    unittest.main()
