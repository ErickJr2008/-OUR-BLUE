const iconMarkup = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/><path d="M9 21v-6h6v6"/>',
  flower: '<path d="M12 12c-2-2-2-5 0-7 2 2 2 5 0 7Zm0 0c2-2 5-2 7 0-2 2-5 2-7 0Zm0 0c2 2 2 5 0 7-2-2-2-5 0-7Zm0 0c-2 2-5 2-7 0 2-2 5-2 7 0Z"/><circle cx="12" cy="12" r="2"/>',
  couple: '<circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3.5 20c0-3.3 2.2-5.5 5.5-5.5s5.5 2.2 5.5 5.5m-1-5c3.4-.8 7 1 7.5 4.5"/>',
  heart: '<path d="M20.8 8.7c0 5-8.8 11-8.8 11s-8.8-6-8.8-11a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  memory: '<path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"/><path d="M4 12h16M8 5h8l2 7H6l2-7Z"/><path d="M10 5V3m4 2V3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="m4.5 4.5 2 2"/>',
  'heart-check': '<path d="M20.8 8.7c0 5-8.8 11-8.8 11s-8.8-6-8.8-11a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"/><path d="m9 12 2 2 4-4"/>',
  message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/><circle cx="9" cy="12" r=".7"/><circle cx="12" cy="12" r=".7"/><circle cx="15" cy="12" r=".7"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.5-1.7-.6a7.8 7.8 0 0 1-1.8 1l-.3 1.8h-2.9l-.3-1.8a7.8 7.8 0 0 1-1.8-1l-1.7.6-1.4-2.5L7 15a7.8 7.8 0 0 1 0-2l-1.4-1.1L7 9.4l1.7.6a7.8 7.8 0 0 1 1.8-1l.3-1.8h2.9l.3 1.8a7.8 7.8 0 0 1 1.8 1l1.7-.6 1.4 2.5-1.4 1.1a7.8 7.8 0 0 1-.1 2Z"/>',
  sparkles: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 2l.7 1.3L7 4l-1.3.7L5 6l-.7-1.3L3 4l1.3-.7L5 2Z"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1 0l3-3A5 5 0 0 0 13 2.9l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"/>',
  user: '<circle cx="12" cy="7" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7Z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/>',
  notes: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8m-8 4h5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  bot: '<rect x="3" y="7" width="18" height="13" rx="4"/><path d="M12 3v4m-3 5v3m6-3v3M7 17h10M1 12v3m22-3v3"/>',
  minus: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'
};

document.querySelectorAll("[data-icon]").forEach((container) => {
  const name = container.dataset.icon;
  if (iconMarkup[name]) {
    container.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconMarkup[name]}</svg>`;
  }
});

const toast = document.querySelector("#toast");
const storageKey = "ourBlue.app.v1";
const accountsKey = "ourBlue.accounts.v1";
const activeAccountKey = "ourBlue.activeAccount.v1";
const accountStoragePrefix = "ourBlue.account.v1.";
const reminderKey = "ourBlue.reminderEnabled";
const eventKey = "ourBlue.specialMoment";
const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80";
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function readStoredValue(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch (error) {
    console.error(`No se pudo leer ${key} desde localStorage.`, error);
    showToast("No se pudieron leer algunos datos guardados en este dispositivo.");
    return fallback;
  }
}

function createDefaultState() {
  return {
    profile: { name: "", about: "", avatar: defaultAvatar },
    poems: [],
    libraryFavorites: [],
    messages: [],
    memories: [],
    reminders: [],
    notes: [],
    experiences: [],
    settings: { reminderEnabled: true }
  };
}

function normalizeRecords(records) {
  return Array.isArray(records) ? records.filter((record) => record && typeof record === "object" && typeof record.id === "string") : [];
}

function readStorageJson(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch (error) {
    console.error(`No se pudo leer ${key} desde localStorage.`, error);
    return fallback;
  }
}

function normalizeState(savedState) {
  const state = createDefaultState();
  if (savedState && typeof savedState === "object") {
    if (savedState.profile && typeof savedState.profile === "object") {
      state.profile = {
        name: typeof savedState.profile.name === "string" ? savedState.profile.name : "",
        about: typeof savedState.profile.about === "string" ? savedState.profile.about : "",
        avatar: typeof savedState.profile.avatar === "string" ? savedState.profile.avatar : defaultAvatar
      };
    }
    ["poems", "messages", "memories", "reminders", "notes", "experiences"].forEach((key) => {
      state[key] = normalizeRecords(savedState[key]);
    });
    if (Array.isArray(savedState.libraryFavorites)) {
      state.libraryFavorites = savedState.libraryFavorites.filter((id) => typeof id === "string");
    }
    if (savedState.settings && typeof savedState.settings === "object") {
      state.settings.reminderEnabled = savedState.settings.reminderEnabled !== false;
    }
  }
  return state;
}

function generateAccountId() {
  const randomPart = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  return `account-${randomPart}`;
}

let accounts = readStorageJson(accountsKey, {});
if (!accounts || typeof accounts !== "object" || Array.isArray(accounts)) accounts = {};

let activeAccountId = readStorageJson(activeAccountKey, "");
if (typeof activeAccountId !== "string" || !accounts[activeAccountId]) {
  const legacyState = readStoredValue(storageKey, null);
  if (Object.keys(accounts).length === 0) {
    activeAccountId = generateAccountId();
    accounts[activeAccountId] = { id: activeAccountId, invitationCode: null };
  } else {
    activeAccountId = Object.keys(accounts)[0];
  }
  if (legacyState) {
    try {
      localStorage.setItem(`${accountStoragePrefix}${activeAccountId}`, JSON.stringify(normalizeState(legacyState)));
    } catch (error) {
      console.error("No se pudo migrar el estado local a una cuenta independiente.", error);
    }
  }
  try {
    localStorage.setItem(accountsKey, JSON.stringify(accounts));
    localStorage.setItem(activeAccountKey, JSON.stringify(activeAccountId));
  } catch (error) {
    console.error("No se pudo inicializar el espacio de cuentas local.", error);
  }
}

Object.values(accounts).forEach((account) => {
  delete account.code;
  delete account.partnerId;
  if (typeof account.invitationCode !== "string") account.invitationCode = null;
});

const savedState = readStorageJson(`${accountStoragePrefix}${activeAccountId}`, readStoredValue(storageKey, null));
const storedReminder = (() => {
  try {
    return localStorage.getItem(`${accountStoragePrefix}${activeAccountId}.reminder`);
  } catch (error) {
    console.error("No se pudo leer la preferencia del recordatorio.", error);
    return null;
  }
})();
let appState = normalizeState(savedState);
if (storedReminder !== null) appState.settings.reminderEnabled = storedReminder === "true";
let backendReady = false;
let backendError = "";
const pairStatuses = {};

async function apiRequest(path, options, account) {
  const requestOptions = options || {};
  const headers = { ...(requestOptions.headers || {}) };
  if (requestOptions.body && !headers["Content-Type"]) headers["Content-Type"] = "application/json";
  if (account && account.token) headers.Authorization = `Bearer ${account.token}`;
  const response = await fetch(path, { ...requestOptions, headers });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "No se pudo completar la solicitud.");
  return result;
}

async function ensureBackendAccount(account) {
  if (account.token) return;
  const identity = await apiRequest("/api/accounts", { method: "POST" });
  account.serverId = identity.accountId;
  account.token = identity.token;
  account.invitationCode = null;
  if (!persistState()) throw new Error("No se pudo guardar de forma segura la sesión de la cuenta en este navegador.");
}

async function loadBackendAccount(account) {
  await ensureBackendAccount(account);
  const status = await apiRequest("/api/pair", { method: "GET" }, account);
  pairStatuses[account.id] = status.partnerId;
  backendReady = true;
  backendError = "";
}

function persistState() {
  try {
    localStorage.setItem(`${accountStoragePrefix}${activeAccountId}`, JSON.stringify(appState));
    localStorage.setItem(accountsKey, JSON.stringify(accounts));
    localStorage.setItem(activeAccountKey, JSON.stringify(activeAccountId));
    localStorage.setItem(storageKey, JSON.stringify(appState));
    localStorage.setItem(`${accountStoragePrefix}${activeAccountId}.reminder`, String(appState.settings.reminderEnabled));
    return true;
  } catch (error) {
    console.error("No se pudieron guardar los cambios en localStorage.", error);
    showToast("No se pudo guardar en este dispositivo. Revisa el espacio disponible; los cambios solo durarán en esta sesión.");
    return false;
  }
}

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function newId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function formatDate(value, options) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es", options || { year: "numeric", month: "long", day: "numeric" }).format(date);
}

function updateProfileHeader() {
  document.querySelector("#profile-name").textContent = appState.profile.name || "Sin nombre";
  document.querySelector("#profile-avatar").src = appState.profile.avatar || defaultAvatar;
  document.querySelector(".profile-button").setAttribute("aria-label", `Menú del perfil ${appState.profile.name ? `de ${appState.profile.name}` : "sin nombre"}`);
}

function updateNotificationCount() {
  const count = appState.reminders.filter((reminder) => reminder.active !== false).length + (appState.settings.reminderEnabled ? 1 : 0);
  const badge = document.querySelector(".notification-count");
  const button = document.querySelector(".notification-button");
  badge.textContent = String(count);
  badge.hidden = count === 0;
  button.setAttribute("aria-label", `Notificaciones, ${count} activas`);
}

const publicPoems = [
  {
    id: "casa-en-tu-voz",
    title: "Casa en tu voz",
    body: "No fue una puerta ni un mapa,\nfue tu manera de decir mi nombre:\nde pronto el mundo tuvo una estancia\ndonde el corazón podía quitarse el abrigo.",
    author: "OUR BLUE",
    category: "Amor",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "la-distancia-cabe",
    title: "La distancia cabe",
    body: "La distancia cabe en una pantalla,\npero no en todo lo que te cuento:\ncruza la noche, aprende mi calle\ny llega a tu hombro convertida en viento.",
    author: "OUR BLUE",
    category: "Distancia",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "inventario-de-la-luz",
    title: "Inventario de la luz",
    body: "Una taza tibia, la ventana abierta,\ntu risa llegando sin hacer ruido:\na veces la dicha no pide una fiesta,\nsólo un sitio pequeño para estar contigo.",
    author: "OUR BLUE",
    category: "Gratitud",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "cuando-amanezca",
    title: "Cuando amanezca",
    body: "Si hoy la noche pesa más de la cuenta,\nno tienes que vencerla de una vez:\nquédate cerca de una luz pequeña;\nmañana también sabrá encontrarte.",
    author: "OUR BLUE",
    category: "Esperanza",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "el-arte-de-esperar",
    title: "El arte de esperar",
    body: "No cuento las horas para que regreses;\nles dejo una lámpara y algo de pan.\nAsí sabe el cariño guardar su sitio:\nsin cerrar la puerta, sin apurar el mar.",
    author: "OUR BLUE",
    category: "Distancia",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "tu-forma-de-quedarte",
    title: "Tu forma de quedarte",
    body: "Te quedas en lo que hago despacio,\nen la canción que no salto al pasar,\nen esa costumbre recién aprendida\nde guardar lo bonito para conversar.",
    author: "OUR BLUE",
    category: "Amor",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "pequena-paz",
    title: "Pequeña paz",
    body: "Que el día no te exija ser tormenta,\nque puedas respirar sin explicar,\nque alguien te pregunte cómo estás\ny tenga tiempo entero para escuchar.",
    author: "OUR BLUE",
    category: "Calma",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "gracias-por-el-margen",
    title: "Gracias por el margen",
    body: "Gracias por dejarme ser borrador,\npor no corregirme el pulso ni el temor;\ncontigo hasta mis dudas encuentran\nun margen ancho donde hacerse voz.",
    author: "OUR BLUE",
    category: "Gratitud",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "despues-de-la-lluvia",
    title: "Después de la lluvia",
    body: "La calle devuelve el cielo en sus charcos,\nlas hojas ensayan un verde distinto;\nno todo lo roto anuncia un final:\na veces abre espacio para lo vivo.",
    author: "OUR BLUE",
    category: "Esperanza",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "mapa-de-regreso",
    title: "Mapa de regreso",
    body: "Cuando me pierdo en mis propios caminos,\nno dibujas flechas ni exiges razón:\npones tu mano junto a la mía\ny el norte aparece en esa unión.",
    author: "OUR BLUE",
    category: "Amor",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "dos-orillas",
    title: "Dos orillas",
    body: "Hay días en que somos dos orillas,\ncon todo un río queriendo hablar;\ntu mensaje cruza bajo las estrellas\ny en medio del agua nos vuelve a juntar.",
    author: "OUR BLUE",
    category: "Distancia",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "permiso-para-descansar",
    title: "Permiso para descansar",
    body: "Deja el reloj en otra habitación,\nque el mundo no cabe en tus hombros hoy;\nla noche no pide respuestas perfectas,\nsólo que descanses donde estás.",
    author: "OUR BLUE",
    category: "Calma",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "tu-nombre-en-la-mesa",
    title: "Tu nombre en la mesa",
    body: "Pongo dos platos aunque llegues tarde,\nla sopa conserva un poco de calor;\nhay nombres que vuelven sencilla la casa\ny hacen más amable cualquier alrededor.",
    author: "OUR BLUE",
    category: "Amor",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "lo-que-si-tenemos",
    title: "Lo que sí tenemos",
    body: "No prometo días sin nubes ni miedo,\nprometo mirarte con honestidad:\nsi el suelo se mueve, buscamos juntos\nun paso posible, una claridad.",
    author: "OUR BLUE",
    category: "Esperanza",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "la-luz-del-pasillo",
    title: "La luz del pasillo",
    body: "Dejo encendida la luz del pasillo,\nno por temor a la oscuridad:\nes que me gusta saber que regresas\na un sitio dispuesto a recibirte en paz.",
    author: "OUR BLUE",
    category: "Gratitud",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "despacio-tambien",
    title: "Despacio también",
    body: "No hay que llegar primero a la dicha,\nni darle un nombre para que sea verdad;\na veces florece mientras lavamos los platos,\ndespacio, en mitad de la cotidianidad.",
    author: "OUR BLUE",
    category: "Calma",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "un-puente-de-domingos",
    title: "Un puente de domingos",
    body: "Nos une una charla sin tema importante,\nun café que se enfría, la tarde al revés;\nlos domingos construyen puentes pequeños\nque el lunes no consigue deshacer.",
    author: "OUR BLUE",
    category: "Amor",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "el-hilo",
    title: "El hilo",
    body: "Aunque no te vea, te escribo una línea,\ncomo quien deja una señal en el mar:\nno para atarte ni pedir que regreses,\nsólo para que sepas dónde voy a estar.",
    author: "OUR BLUE",
    category: "Distancia",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "lo-que-viene",
    title: "Lo que viene",
    body: "El futuro no llega con instrucciones,\ntrae una pregunta y una puerta azul;\nsi vamos con miedo, vayamos de todos modos:\ntambién se hace camino al cuidar la luz.",
    author: "OUR BLUE",
    category: "Esperanza",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "silencio-amable",
    title: "Silencio amable",
    body: "Podemos callar sin volvernos extraños,\ndejar que la tarde termine de hablar;\ntu hombro conoce el peso que traigo\ny no necesita hacerlo explicar.",
    author: "OUR BLUE",
    category: "Calma",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  },
  {
    id: "donde-empieza-el-dia",
    title: "Donde empieza el día",
    body: "El día comienza antes del alba,\ncuando te pienso y el cuarto es azul;\nno sé qué traerán las próximas horas,\npero hay más horizonte si estás tú.",
    author: "OUR BLUE",
    category: "Amor",
    source: "Creación original para OUR BLUE",
    license: "Original de OUR BLUE; autorizada su consulta, dedicatoria y compartición en la aplicación.",
    original: true
  }
];
const libraryCategories = [...new Set(publicPoems.map((poem) => poem.category))].sort((a, b) => a.localeCompare(b, "es"));
let librarySearchQuery = "";
let libraryCategoryFilter = "";
let libraryFavoritesOnly = false;

function renderFeaturedPoem() {
  const today = new Date();
  const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
  const poem = publicPoems[dayNumber % publicPoems.length];
  document.querySelector("#featured-poem-body").innerHTML = escapeHtml(poem.body).replace(/\n/g, "<br>");
  document.querySelector("#featured-poem-attribution").textContent = `${poem.title} · ${poem.author}`;
}

const reminderToggle = document.querySelector("#reminder-toggle");
reminderToggle.checked = appState.settings.reminderEnabled;
reminderToggle.addEventListener("change", () => {
  appState.settings.reminderEnabled = reminderToggle.checked;
  const saved = persistState();
  updateNotificationCount();
  if (saved) showToast(reminderToggle.checked ? "Recordatorio activado en este dispositivo." : "Recordatorio desactivado en este dispositivo.");
});

const defaultMoment = { name: "Nuestro aniversario 🎂", date: "2026-11-25", message: "¡No lo olvides!" };
const eventDialog = document.querySelector("#event-dialog");
const eventForm = document.querySelector("#event-form");
const eventDate = document.querySelector("#event-date");
const eventName = document.querySelector("#event-name");
const eventMessage = document.querySelector("#event-message");
let savedMoment = readStoredValue(`${accountStoragePrefix}${activeAccountId}.moment`, defaultMoment);
if (!savedMoment || typeof savedMoment !== "object" || typeof savedMoment.name !== "string" || typeof savedMoment.date !== "string") {
  savedMoment = defaultMoment;
}

function renderMoment(moment) {
  eventName.textContent = moment.name;
  const date = new Date(`${moment.date}T12:00:00`);
  eventDate.textContent = moment.date && !Number.isNaN(date.getTime()) ? new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(date) : "";
  eventMessage.textContent = moment.message || "Un momento para recordar";
}

function openMomentEditor() {
  eventForm.elements.name.value = savedMoment.name;
  eventForm.elements.date.value = savedMoment.date;
  eventForm.elements.message.value = savedMoment.message || "";
  eventDialog.showModal();
}

renderMoment(savedMoment);
document.querySelector("#edit-event").addEventListener("click", openMomentEditor);
document.querySelector("#event-tile").addEventListener("click", openMomentEditor);
document.querySelector(".dialog-close").addEventListener("click", () => eventDialog.close());
eventDialog.addEventListener("click", (event) => {
  if (event.target === eventDialog) eventDialog.close();
});
eventDialog.addEventListener("cancel", () => eventDialog.close());
eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!eventForm.reportValidity()) return;
  savedMoment = {
    name: eventForm.elements.name.value.trim(),
    date: eventForm.elements.date.value,
    message: eventForm.elements.message.value.trim()
  };
  renderMoment(savedMoment);
  try {
    localStorage.setItem(`${accountStoragePrefix}${activeAccountId}.moment`, JSON.stringify(savedMoment));
    eventDialog.close();
    showToast("Momento guardado en este dispositivo.");
  } catch (error) {
    console.error("No se pudo guardar el momento.", error);
    showToast("No se pudo guardar el momento en este dispositivo.");
  }
});

const viewSpecs = {
  "mi-universo": { title: "Mi Universo", description: "Tu espacio personal y la información de tu perfil." },
  "nuestro-universo": { title: "Nuestro Universo", description: "Experiencias y recuerdos organizados como compartidos en este dispositivo." },
  poemas: { title: "Poemas", description: "Explora la biblioteca general de OUR BLUE o administra tus poemas privados, guardados solo en este dispositivo." },
  mensajes: { title: "Mensajes", description: "Escribe y organiza tus cartas. Se guardan en este dispositivo y no se envían a otra cuenta." },
  recuerdos: { title: "Recuerdos", description: "Guarda fotografías, fechas y descripciones de momentos importantes." },
  recordatorios: { title: "Recordatorios", description: "Administra tus fechas y activa o desactiva avisos locales." },
  notas: { title: "Notas para Entendernos", description: "Un espacio personal para ordenar notas personales y marcadas como compartidas." },
  chatbot: { title: "Chatbot - Tu Guía", description: "Ayuda sobre las funciones de OUR BLUE; no consulta información privada." },
  configuracion: { title: "Configuración", description: "Administra tu perfil y tus datos guardados en este dispositivo." }
};
const dashboard = document.querySelector(".dashboard");
const welcome = document.querySelector(".welcome");
const workspace = document.querySelector("#workspace-view");
const workspaceTitle = document.querySelector("#workspace-title");
const workspaceDescription = document.querySelector("#workspace-description");
const workspaceContent = document.querySelector("#workspace-content");
const chatCard = document.querySelector(".chatbot-card");
let currentView = "inicio";

function card(title, contents, wide) {
  const heading = title.startsWith('<div class="workspace-toolbar">') ? title : `<h2>${title}</h2>`;
  return `<section class="workspace-panel${wide ? " workspace-panel-wide" : ""}">${heading}${contents}</section>`;
}

function emptyMessage(message) {
  return `<div class="workspace-empty">${message}</div>`;
}

function actions(type, record, additional) {
  return `<div class="workspace-entry-actions"><button type="button" data-action="edit" data-type="${type}" data-id="${escapeHtml(record.id)}">Editar</button>${additional || ""}<button type="button" data-action="delete" data-type="${type}" data-id="${escapeHtml(record.id)}">Eliminar</button></div>`;
}

function getFilteredPublicPoems() {
  const query = librarySearchQuery.trim().toLocaleLowerCase("es");
  return publicPoems.filter((poem) => {
    const matchesText = !query || `${poem.title} ${poem.body} ${poem.author} ${poem.category}`.toLocaleLowerCase("es").includes(query);
    const matchesCategory = !libraryCategoryFilter || poem.category === libraryCategoryFilter;
    const matchesFavorite = !libraryFavoritesOnly || appState.libraryFavorites.includes(poem.id);
    return matchesText && matchesCategory && matchesFavorite;
  });
}

function renderLibraryEntries() {
  return getFilteredPublicPoems().map((poem) => {
    const favorite = appState.libraryFavorites.includes(poem.id);
    return `<article class="workspace-entry library-poem">
      <h3>${escapeHtml(poem.title)}</h3>
      <p class="library-poem-body">${escapeHtml(poem.body)}</p>
      <span class="workspace-note-scope">Contenido original de OUR BLUE</span>
      <dl class="poem-metadata">
        <div><dt>Autor</dt><dd>${escapeHtml(poem.author)}</dd></div>
        <div><dt>Categoría</dt><dd>${escapeHtml(poem.category)}</dd></div>
        <div><dt>Fuente</dt><dd>${escapeHtml(poem.source)}</dd></div>
        <div><dt>Condición de uso</dt><dd>${escapeHtml(poem.license)}</dd></div>
        ${poem.sourceUrl ? `<div><dt>Enlace a la fuente</dt><dd><a href="${escapeHtml(poem.sourceUrl)}" target="_blank" rel="noopener noreferrer">Consultar fuente original</a></dd></div>` : ""}
      </dl>
      <div class="workspace-entry-actions">
        <button type="button" data-action="favorite-library" data-id="${escapeHtml(poem.id)}" aria-pressed="${favorite}">${favorite ? "Quitar de favoritos" : "Guardar en favoritos"}</button>
        <button type="button" data-action="share-library" data-id="${escapeHtml(poem.id)}">Compartir</button>
      </div>
    </article>`;
  }).join("") || emptyMessage("No hay poemas que coincidan con estos filtros.");
}

function renderPoems() {
  const categoryOptions = libraryCategories.map((category) => `<option value="${escapeHtml(category)}" ${libraryCategoryFilter === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("");
  const publicLibrary = `${card(`<div class="workspace-toolbar"><h2>Biblioteca general · ${publicPoems.length} poemas</h2></div>`, `
    <p class="editor-help">Colección original de OUR BLUE, disponible para todas las personas. Puedes leerla, dedicarla y compartirla. Los favoritos se guardan en este dispositivo.</p>
    <div class="library-filters">
      <label>Buscar poemas<input type="search" data-library-search value="${escapeHtml(librarySearchQuery)}" placeholder="Título, texto, autor o categoría" autocomplete="off"></label>
      <label>Filtrar por categoría<select data-library-category><option value="">Todas las categorías</option>${categoryOptions}</select></label>
      <label class="workspace-check"><input type="checkbox" data-library-favorites ${libraryFavoritesOnly ? "checked" : ""}> Solo mis favoritos</label>
    </div>
    <p class="library-results" id="library-results" aria-live="polite">${getFilteredPublicPoems().length} de ${publicPoems.length} poemas</p>
    <div class="workspace-list library-list" id="public-poem-list">${renderLibraryEntries()}</div>`, true)}`;
  const personalEntries = appState.poems.map((poem) => `<article class="workspace-entry"><h3>${escapeHtml(poem.title)}</h3><p>${escapeHtml(poem.body)}</p><span class="workspace-note-scope">Poema privado · guardado solo en este dispositivo</span>${poem.favorite ? '<span class="workspace-note-scope">Favorito</span>' : ""}${actions("poems", poem, `<button type="button" data-action="favorite" data-type="poems" data-id="${escapeHtml(poem.id)}">${poem.favorite ? "Quitar de favoritos" : "Marcar favorito"}</button><button type="button" data-action="share-private-poem" data-id="${escapeHtml(poem.id)}">Compartir</button>`)}</article>`).join("");
  const personalLibrary = `${card(`<div class="workspace-toolbar"><h2>Mis poemas privados</h2><button class="workspace-button workspace-button-primary" type="button" data-action="create" data-type="poems">Crear poema</button></div>`, `<p class="editor-help">Estos textos son tuyos y no aparecen en la biblioteca general ni se sincronizan con otras cuentas.</p><div class="workspace-list">${personalEntries || emptyMessage("Aún no has creado poemas privados.")}</div>`, true)}`;
  return `${publicLibrary}${personalLibrary}`;
}

function renderMessages() {
  const entries = appState.messages.map((message) => `<article class="workspace-entry"><h3>${escapeHtml(message.title)}</h3><p>${escapeHtml(message.body)}</p><span class="workspace-status">Borrador local</span>${actions("messages", message)}</article>`).join("");
  return `${card(`<div class="workspace-toolbar"><h2>Cartas y borradores</h2><button class="workspace-button workspace-button-primary" type="button" data-action="create" data-type="messages">Escribir carta</button></div>`, `<p class="editor-help">Los borradores permanecen en este dispositivo. Enviar una carta a otra persona requiere un servicio/backend que este proyecto no incluye.</p><div class="workspace-list">${entries || emptyMessage("Todavía no hay cartas ni borradores.")}</div>`, true)}`;
}

function renderMemories(sharedOnly) {
  const memories = appState.memories.filter((memory) => !sharedOnly || memory.scope === "shared");
  const entries = memories.map((memory) => `<article class="workspace-entry"><h3>${escapeHtml(memory.title)}</h3>${memory.date ? `<div class="workspace-entry-meta">${escapeHtml(formatDate(memory.date))}</div>` : ""}<p>${escapeHtml(memory.description)}</p>${memory.photo ? `<img class="workspace-photo" src="${escapeHtml(memory.photo)}" alt="Fotografía de ${escapeHtml(memory.title)}">` : ""}<span class="workspace-note-scope">${memory.scope === "shared" ? "Marcado como compartido · solo en este dispositivo" : "Personal"}</span>${actions("memories", memory)}</article>`).join("");
  return entries || emptyMessage(sharedOnly ? "Aún no hay recuerdos marcados como compartidos." : "Aún no has guardado recuerdos.");
}

function renderReminders() {
  const entries = appState.reminders.map((reminder) => `<article class="workspace-entry"><h3>${escapeHtml(reminder.title)}</h3>${reminder.date ? `<div class="workspace-entry-meta">${escapeHtml(formatDate(reminder.date))}</div>` : ""}<label class="workspace-check"><input type="checkbox" data-action="toggle-reminder" data-id="${escapeHtml(reminder.id)}" ${reminder.active !== false ? "checked" : ""}> Recordatorio activo en este dispositivo</label>${actions("reminders", reminder)}</article>`).join("");
  const defaultSetting = `<label class="workspace-check"><input type="checkbox" data-action="toggle-default-reminder" ${appState.settings.reminderEnabled ? "checked" : ""}> Decirnos “te quiero” antes de dormir</label>`;
  return `${card(`<div class="workspace-toolbar"><h2>Mis recordatorios</h2><button class="workspace-button workspace-button-primary" type="button" data-action="create" data-type="reminders">Crear recordatorio</button></div>`, `${defaultSetting}<div class="workspace-list">${entries || emptyMessage("No hay otros recordatorios guardados.")}</div>`, true)}`;
}

function renderNotes() {
  const entries = appState.notes.map((note) => `<article class="workspace-entry"><h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.body)}</p><span class="workspace-note-scope">${note.scope === "shared" ? "Marcada como compartida · solo en este dispositivo" : "Personal"}</span>${actions("notes", note)}</article>`).join("");
  return `${card(`<div class="workspace-toolbar"><h2>Mis notas</h2><button class="workspace-button workspace-button-primary" type="button" data-action="create" data-type="notes">Crear nota</button></div>`, `<div class="workspace-list">${entries || emptyMessage("No hay notas guardadas.")}</div>`, true)}`;
}

function renderExperiences() {
  const entries = appState.experiences.map((experience) => `<article class="workspace-entry"><h3>${escapeHtml(experience.title)}</h3>${experience.date ? `<div class="workspace-entry-meta">${escapeHtml(formatDate(experience.date))}</div>` : ""}<p>${escapeHtml(experience.description)}</p>${actions("experiences", experience)}</article>`).join("");
  return `${card(`<div class="workspace-toolbar"><h2>Experiencias</h2><button class="workspace-button workspace-button-primary" type="button" data-action="create" data-type="experiences">Agregar experiencia</button></div>`, `<div class="workspace-list">${entries || emptyMessage("Todavía no hay experiencias guardadas.")}</div>`, true)}${card("Recuerdos compartidos", `<div class="workspace-list">${renderMemories(true)}</div>`, true)}${card("Sobre el espacio compartido", '<p>Las experiencias y recuerdos marcados como compartidos se guardan solo en este navegador. No se sincronizan con otra persona o dispositivo.</p>')}`;
}

function renderProfile() {
  const profileName = appState.profile.name || "Perfil sin nombre";
  const profile = `<div class="workspace-profile"><img src="${escapeHtml(appState.profile.avatar || defaultAvatar)}" alt="Avatar ${escapeHtml(appState.profile.name ? `de ${appState.profile.name}` : "sin nombre")}"><div><h3>${escapeHtml(profileName)}</h3><p>${escapeHtml(appState.profile.about || "Aún no agregas información personal.")}</p><button class="workspace-button workspace-button-primary" type="button" data-action="edit-profile">Editar perfil</button></div></div>`;
  return `${card("Tu perfil", profile, true)}${card("Datos personales", `<p>El nombre, la información y el avatar se guardan localmente en este navegador.</p><button class="workspace-button" type="button" data-open-view="configuracion">Ir a Configuración</button>`)}`;
}

function renderSettings() {
  const currentAccount = accounts[activeAccountId] || {};
  const accountOptions = Object.values(accounts).map((account) => {
    const state = readStorageJson(`${accountStoragePrefix}${account.id}`, null);
    const name = state && state.profile && state.profile.name ? state.profile.name : "Sin nombre";
    return `<option value="${escapeHtml(account.id)}" ${account.id === activeAccountId ? "selected" : ""}>${escapeHtml(name)}</option>`;
  }).join("");
  const accountReady = backendReady && Boolean(currentAccount.token) && Object.prototype.hasOwnProperty.call(pairStatuses, activeAccountId);
  const partnerId = pairStatuses[activeAccountId];
  const partnerAccount = Object.values(accounts).find((account) => account.serverId === partnerId);
  const partnerName = partnerAccount
    ? (readStorageJson(`${accountStoragePrefix}${partnerAccount.id}`, {})?.profile?.name || "otra cuenta")
    : "otra cuenta";
  let linkingControls;
  if (!accountReady) {
    linkingControls = `<p class="link-status">${escapeHtml(backendError || "Conectando con el servicio seguro de invitaciones…")}</p>`;
  } else if (partnerId) {
    linkingControls = `<p class="link-status">Cuenta vinculada con <strong>${escapeHtml(partnerName)}</strong>. El código no concede acceso a los datos del espacio de otra pareja.</p><button class="workspace-button" type="button" data-action="unlink-account">Desvincular cuentas</button>`;
  } else {
    const activeCode = currentAccount.invitationCode
      ? `<div class="exclusive-code"><span>Código de un solo uso · vence ${escapeHtml(new Date(currentAccount.invitationExpiresAt).toLocaleString("es"))}</span><strong id="exclusive-account-code">${escapeHtml(currentAccount.invitationCode)}</strong><button class="workspace-button" type="button" data-action="copy-invitation">Copiar código</button></div>`
      : `<p class="link-status">Aún no tienes una invitación activa.</p>`;
    linkingControls = `${activeCode}
      <button class="workspace-button workspace-button-primary" type="button" data-action="create-invitation">${currentAccount.invitationCode ? "Generar un código nuevo" : "Generar código de invitación"}</button>
      ${currentAccount.invitationCode ? '<button class="workspace-button" type="button" data-action="cancel-invitation">Cancelar código actual</button>' : ""}
      <label class="account-field">Código de invitación de la otra cuenta<input type="text" data-account-code maxlength="16" autocomplete="off" placeholder="Ej. A2B4C6D8F3H5J7K9"></label>
      <button class="workspace-button" type="button" data-action="link-account">Vincular con este código</button>
      <p class="link-status">Cada invitación es aleatoria, única, vence en 24 horas y solo puede aceptarse una vez.</p>`;
  }
  return `${card("Preferencias", `<label class="workspace-check"><input type="checkbox" data-action="toggle-default-reminder" ${appState.settings.reminderEnabled ? "checked" : ""}> Activar recordatorio nocturno en este dispositivo</label><p>Los avisos se guardan localmente. Esta página no envía notificaciones del sistema cuando está cerrada.</p>`, true)}${card("Cuenta y vinculación", `
    <p>Las invitaciones se validan en el servidor y se guardan como hashes en la base de datos. Aceptar un código vincula únicamente las dos cuentas involucradas.</p>
    <label class="account-field">Cuenta activa<select data-action="switch-account">${accountOptions}</select></label>
    <button class="workspace-button" type="button" data-action="create-account">Crear otra cuenta local</button>
    ${linkingControls}
  `, true)}${card("Copia local", `<p>Descarga una copia JSON de tu perfil y los datos almacenados en esta página.</p><button class="workspace-button" type="button" data-action="export">Exportar mis datos</button>`)}${card("Privacidad", `<p>El servidor gestiona las cuentas vinculadas y sus invitaciones. Los perfiles y contenidos siguen guardándose localmente y no se sincronizan entre dispositivos.</p><button class="workspace-button" type="button" data-action="clear">Borrar datos locales de esta cuenta</button>`)}`;
}

function renderChatView() {
  return `<div class="workspace-message">Abre «Tu Guía» desde la burbuja azul para recibir ayuda sobre OUR BLUE.</div>`;
}

function renderCurrentView() {
  const spec = viewSpecs[currentView];
  if (currentView === "inicio") {
    welcome.hidden = false;
    dashboard.hidden = false;
    workspace.hidden = true;
  } else {
    welcome.hidden = true;
    dashboard.hidden = true;
    workspace.hidden = false;
    workspaceTitle.textContent = spec.title;
    workspaceDescription.textContent = spec.description;
    workspaceContent.innerHTML = ({
      "mi-universo": renderProfile,
      "nuestro-universo": renderExperiences,
      poemas: renderPoems,
      mensajes: renderMessages,
      recuerdos: () => card(`<div class="workspace-toolbar"><h2>Mis recuerdos</h2><button class="workspace-button workspace-button-primary" type="button" data-action="create" data-type="memories">Agregar recuerdo</button></div>`, `<div class="workspace-list">${renderMemories(false)}</div>`, true),
      recordatorios: renderReminders,
      notas: renderNotes,
      chatbot: renderChatView,
      configuracion: renderSettings
    })[currentView]();
  }
  document.querySelectorAll(".nav-item").forEach((item) => {
    const active = item.dataset.view === currentView;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  reminderToggle.checked = appState.settings.reminderEnabled;
  updateProfileHeader();
  updateNotificationCount();
}

function navigateTo(view, updateLocation) {
  if (view !== "inicio" && !viewSpecs[view]) return;
  currentView = view;
  if (updateLocation && window.location.hash !== `#${view}`) window.location.hash = view;
  renderCurrentView();
  window.scrollTo(0, 0);
}

document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (link.dataset.view === "chatbot") {
      openGuideChat();
      return;
    }
    navigateTo(link.dataset.view, true);
  });
});
document.querySelectorAll("[data-open-view]").forEach((button) => {
  button.addEventListener("click", () => navigateTo(button.dataset.openView, true));
});
function syncRouteFromLocation() {
  const view = window.location.hash.slice(1) || "inicio";
  navigateTo(viewSpecs[view] ? view : "inicio", false);
}
window.addEventListener("hashchange", syncRouteFromLocation);
window.addEventListener("popstate", syncRouteFromLocation);
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  navigateTo("inicio", true);
});
document.querySelector(".profile-button").addEventListener("click", () => navigateTo("mi-universo", true));
document.querySelector(".notification-button").addEventListener("click", () => navigateTo("recordatorios", true));
const guideBubble = document.querySelector("#guide-bubble");
const chatClose = document.querySelector("#chat-close");
const chatCollapse = document.querySelector("#chat-collapse");

function openGuideChat() {
  resetChatConversation();
  chatCard.hidden = false;
  chatCard.classList.remove("is-collapsed");
  chatCard.classList.add("is-open");
  guideBubble.classList.add("is-hidden");
  guideBubble.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    chatInput.focus();
    chatReplies.scrollTop = chatReplies.scrollHeight;
  });
}

function hideGuideChat() {
  chatCard.classList.remove("is-open");
  chatCard.classList.add("is-collapsed");
  chatCard.hidden = true;
  resetChatConversation();
  guideBubble.classList.remove("is-hidden");
  guideBubble.setAttribute("aria-expanded", "false");
  guideBubble.focus();
}

guideBubble.addEventListener("click", openGuideChat);
chatCollapse.addEventListener("click", hideGuideChat);
chatClose.addEventListener("click", hideGuideChat);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatCard.classList.contains("is-open")) hideGuideChat();
});

const editorDialog = document.querySelector("#editor-dialog");
const editorForm = document.querySelector("#editor-form");
const editorFields = document.querySelector("#editor-fields");
const fieldDefinitions = {
  poems: [
    { name: "title", label: "Título", required: true, maxLength: 80 },
    { name: "body", label: "Poema", type: "textarea", required: true, maxLength: 3000 }
  ],
  messages: [
    { name: "title", label: "Asunto", required: true, maxLength: 100 },
    { name: "body", label: "Carta", type: "textarea", required: true, maxLength: 5000 }
  ],
  memories: [
    { name: "title", label: "Título", required: true, maxLength: 100 },
    { name: "date", label: "Fecha", type: "date" },
    { name: "description", label: "Descripción", type: "textarea", maxLength: 2000 },
    { name: "scope", label: "Organización", type: "select", options: [["personal", "Personal"], ["shared", "Marcado como compartido (local)"]] },
    { name: "photo", label: "Fotografía", type: "file", accept: "image/jpeg,image/png,image/webp,image/gif", help: "JPG, PNG, WebP o GIF; máximo 1 MB. La imagen se guarda localmente." }
  ],
  reminders: [
    { name: "title", label: "Recordatorio", required: true, maxLength: 100 },
    { name: "date", label: "Fecha", type: "date", required: true }
  ],
  notes: [
    { name: "title", label: "Título", required: true, maxLength: 100 },
    { name: "body", label: "Nota", type: "textarea", required: true, maxLength: 3000 },
    { name: "scope", label: "Tipo de nota", type: "select", options: [["personal", "Personal"], ["shared", "Marcada como compartida (local)"]] }
  ],
  experiences: [
    { name: "title", label: "Experiencia", required: true, maxLength: 100 },
    { name: "date", label: "Fecha", type: "date" },
    { name: "description", label: "Descripción", type: "textarea", maxLength: 2000 }
  ],
  profile: [
    { name: "name", label: "Nombre (opcional)", maxLength: 50 },
    { name: "about", label: "Información personal", type: "textarea", maxLength: 500 },
    { name: "avatar", label: "Cambiar avatar", type: "file", accept: "image/jpeg,image/png,image/webp,image/gif", help: "JPG, PNG, WebP o GIF; máximo 1 MB. La imagen se guarda localmente." }
  ]
};

function appendEditorField(definition, value) {
  const label = document.createElement("label");
  label.append(document.createTextNode(definition.label));
  const input = document.createElement(definition.type === "textarea" ? "textarea" : definition.type === "select" ? "select" : "input");
  input.name = definition.name;
  if (definition.type !== "textarea" && definition.type !== "select") input.type = definition.type || "text";
  if (definition.required) input.required = true;
  if (definition.maxLength) input.maxLength = definition.maxLength;
  if (definition.accept) input.accept = definition.accept;
  if (definition.type === "select") {
    definition.options.forEach(([optionValue, optionLabel]) => {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionLabel;
      input.append(option);
    });
  }
  if (definition.type !== "file") input.value = value == null ? (definition.type === "select" ? "personal" : "") : value;
  label.append(input);
  editorFields.append(label);
  if (definition.help) {
    const help = document.createElement("p");
    help.className = "editor-help";
    help.textContent = definition.help;
    editorFields.append(help);
  }
}

function getRecord(type, id) {
  return type === "profile" ? appState.profile : appState[type].find((record) => record.id === id);
}

function openEditor(type, id) {
  const recordType = type === "profile" ? "profile" : type;
  const record = id ? getRecord(recordType, id) : {};
  if (!record || !fieldDefinitions[recordType]) return;
  editorForm.dataset.type = recordType;
  editorForm.dataset.id = id || "";
  document.querySelector("#editor-title").textContent = recordType === "profile" ? "Editar perfil" : id ? "Editar" : ({
    poems: "Crear poema",
    messages: "Escribir carta",
    memories: "Agregar recuerdo",
    reminders: "Crear recordatorio",
    notes: "Crear nota",
    experiences: "Agregar experiencia"
  })[recordType];
  document.querySelector("#editor-kicker").textContent = recordType === "profile" ? "MI UNIVERSO" : "OUR BLUE";
  document.querySelector("#editor-save").textContent = recordType === "messages" ? "Guardar borrador" : "Guardar";
  editorFields.replaceChildren();
  fieldDefinitions[recordType].forEach((field) => appendEditorField(field, record[field.name]));
  editorDialog.showModal();
}

function readImageFile(file) {
  if (!file) return Promise.resolve(null);
  if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type)) return Promise.reject(new Error("El archivo debe ser JPG, PNG, WebP o GIF."));
  if (file.size > 1024 * 1024) return Promise.reject(new Error("La imagen supera el límite de 1 MB."));
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result)));
    reader.addEventListener("error", () => reject(new Error("No se pudo leer la imagen seleccionada.")));
    reader.readAsDataURL(file);
  });
}

function recordSaveFeedback(message) {
  const saved = persistState();
  renderCurrentView();
  if (saved) showToast(message);
}

function updateLibraryResults() {
  const poemList = document.querySelector("#public-poem-list");
  if (!poemList) return;
  poemList.innerHTML = renderLibraryEntries();
  const results = document.querySelector("#library-results");
  results.textContent = `${getFilteredPublicPoems().length} de ${publicPoems.length} poemas`;
}

async function sharePoem(poem, isPublic) {
  const attribution = isPublic ? `\n— ${poem.author}, ${poem.source}\n${poem.license}` : `\n— ${appState.profile.name || "OUR BLUE"}`;
  const text = `${poem.title}\n\n${poem.body}${attribution}`;
  if (typeof navigator.share === "function") {
    try {
      await navigator.share({ title: poem.title, text });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
      console.error("No se pudo compartir el poema.", error);
      showToast("No se pudo compartir el poema desde este navegador.");
      return;
    }
  }
  if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
    showToast("Este navegador no permite compartir ni copiar el poema.");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showToast("Poema copiado para compartir.");
  } catch (error) {
    console.error("No se pudo copiar el poema para compartir.", error);
    showToast("No se pudo copiar el poema. Revisa los permisos del navegador.");
  }
}

editorForm.querySelector("[data-editor-cancel]").addEventListener("click", () => editorDialog.close());
editorForm.querySelector(".dialog-close").addEventListener("click", () => editorDialog.close());
editorDialog.addEventListener("click", (event) => {
  if (event.target === editorDialog) editorDialog.close();
});
editorDialog.addEventListener("cancel", () => editorDialog.close());
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (editorDialog.open) editorDialog.close();
    if (eventDialog.open) eventDialog.close();
  }
});
editorForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!editorForm.reportValidity()) return;
  const type = editorForm.dataset.type;
  const id = editorForm.dataset.id;
  const formData = new FormData(editorForm);
  const record = {};
  fieldDefinitions[type].forEach((field) => {
    if (field.type === "file") return;
    const value = formData.get(field.name);
    record[field.name] = typeof value === "string" ? (field.type === "select" ? value : value.trim()) : "";
  });
  try {
    const imageField = type === "profile" ? "avatar" : type === "memories" ? "photo" : null;
    if (imageField) {
      const file = formData.get(imageField);
      if (file && file.size) record[imageField] = await readImageFile(file);
      else if (id || type === "profile") {
        const existing = getRecord(type, id);
        if (existing && existing[imageField]) record[imageField] = existing[imageField];
      }
    }
  } catch (error) {
    showToast(error.message);
    return;
  }
  if (type === "profile") {
    appState.profile = { ...appState.profile, ...record };
  } else {
    const records = appState[type];
    const existingIndex = id ? records.findIndex((item) => item.id === id) : -1;
    if (existingIndex >= 0) records[existingIndex] = { ...records[existingIndex], ...record };
    else records.unshift({ id: newId(), createdAt: new Date().toISOString(), ...record });
  }
  editorDialog.close();
  recordSaveFeedback(type === "messages" ? "Borrador guardado en este dispositivo." : "Cambios guardados en este dispositivo.");
});

workspaceContent.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.openView) {
    navigateTo(button.dataset.openView, true);
    return;
  }
  const { action, type, id } = button.dataset;
  if (action === "create") {
    openEditor(type);
  } else if (action === "favorite-library") {
    const favoriteIndex = appState.libraryFavorites.indexOf(id);
    if (favoriteIndex >= 0) appState.libraryFavorites.splice(favoriteIndex, 1);
    else appState.libraryFavorites.push(id);
    recordSaveFeedback(favoriteIndex >= 0 ? "Poema eliminado de favoritos." : "Poema añadido a favoritos.");
  } else if (action === "share-library") {
    const poem = publicPoems.find((entry) => entry.id === id);
    if (poem) sharePoem(poem, true);
  } else if (action === "share-private-poem") {
    const poem = getRecord("poems", id);
    if (poem) sharePoem(poem, false);
  } else if (action === "edit") {
    openEditor(type, id);
  } else if (action === "edit-profile") {
    openEditor("profile");
  } else if (action === "favorite") {
    const poem = getRecord(type, id);
    if (!poem) return;
    poem.favorite = !poem.favorite;
    recordSaveFeedback(poem.favorite ? "Poema añadido a favoritos." : "Poema eliminado de favoritos.");
  } else if (action === "delete") {
    if (!window.confirm("¿Eliminar este elemento? Esta acción no se puede deshacer.")) return;
    appState[type] = appState[type].filter((record) => record.id !== id);
    recordSaveFeedback("Elemento eliminado.");
  } else if (action === "create-account") {
    persistState();
    const accountId = generateAccountId();
    const newAccount = { id: accountId, invitationCode: null };
    accounts[accountId] = newAccount;
    try {
      await ensureBackendAccount(newAccount);
    } catch (error) {
      backendError = error.message;
      renderCurrentView();
      showToast(error.message);
      return;
    }
    activeAccountId = accountId;
    appState = createDefaultState();
    savedMoment = defaultMoment;
    renderMoment(savedMoment);
    persistState();
    try {
      await loadBackendAccount(newAccount);
    } catch (error) {
      backendError = error.message;
      showToast(error.message);
    }
    renderCurrentView();
    showToast("Cuenta creada. Genera una invitación para vincularla con otra cuenta.");
  } else if (action === "create-invitation") {
    try {
      const currentAccount = accounts[activeAccountId];
      const invitation = await apiRequest("/api/invitations", { method: "POST" }, currentAccount);
      currentAccount.invitationCode = invitation.code;
      currentAccount.invitationExpiresAt = invitation.expiresAt;
      persistState();
      renderCurrentView();
      showToast("Código único creado. Compártelo con la persona que quieras vincular.");
    } catch (error) {
      showToast(error.message);
    }
  } else if (action === "cancel-invitation") {
    try {
      await apiRequest("/api/invitations/active", { method: "DELETE" }, accounts[activeAccountId]);
      accounts[activeAccountId].invitationCode = null;
      delete accounts[activeAccountId].invitationExpiresAt;
      persistState();
      renderCurrentView();
      showToast("Código cancelado e invalidado.");
    } catch (error) {
      showToast(error.message);
    }
  } else if (action === "copy-invitation") {
    try {
      await navigator.clipboard.writeText(accounts[activeAccountId].invitationCode);
      showToast("Código copiado.");
    } catch (error) {
      console.error("No se pudo copiar el código de invitación.", error);
      showToast("No se pudo copiar el código; selecciónalo y cópialo manualmente.");
    }
  } else if (action === "link-account") {
    const input = workspaceContent.querySelector("[data-account-code]");
    const code = input ? input.value.trim().toUpperCase() : "";
    if (!code) {
      showToast("Ingresa el código de invitación de la otra cuenta.");
      return;
    }
    try {
      const result = await apiRequest("/api/invitations/accept", {
        method: "POST",
        body: JSON.stringify({ code })
      }, accounts[activeAccountId]);
      accounts[activeAccountId].invitationCode = null;
      delete accounts[activeAccountId].invitationExpiresAt;
      pairStatuses[activeAccountId] = result.partnerId;
      persistState();
      renderCurrentView();
      showToast("Cuenta vinculada. El código ya no se puede volver a utilizar.");
    } catch (error) {
      showToast(error.message);
    }
  } else if (action === "unlink-account") {
    try {
      const partnerId = pairStatuses[activeAccountId];
      await apiRequest("/api/pair", { method: "DELETE" }, accounts[activeAccountId]);
      accounts[activeAccountId].invitationCode = null;
      delete accounts[activeAccountId].invitationExpiresAt;
      pairStatuses[activeAccountId] = null;
      const localPartner = Object.values(accounts).find((account) => account.serverId === partnerId);
      if (localPartner) {
        pairStatuses[localPartner.id] = null;
        localPartner.invitationCode = null;
        delete localPartner.invitationExpiresAt;
      }
      persistState();
      renderCurrentView();
      showToast("Cuentas desvinculadas; las invitaciones anteriores quedaron invalidadas.");
    } catch (error) {
      showToast(error.message);
    }
  } else if (action === "export") {
    const file = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
    const downloadUrl = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "our-blue-datos.json";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    showToast("Copia de tus datos descargada.");
  } else if (action === "clear") {
    if (!window.confirm("Se borrarán el perfil y los datos locales de esta cuenta. ¿Continuar?")) return;
    try {
      localStorage.removeItem(`${accountStoragePrefix}${activeAccountId}`);
      localStorage.removeItem(`${accountStoragePrefix}${activeAccountId}.reminder`);
      localStorage.removeItem(`${accountStoragePrefix}${activeAccountId}.moment`);
      appState = createDefaultState();
      savedMoment = defaultMoment;
      persistState();
      renderMoment(savedMoment);
      renderCurrentView();
      showToast("Se borraron los datos locales de OUR BLUE.");
    } catch (error) {
      console.error("No se pudieron borrar los datos locales.", error);
      showToast("No se pudieron borrar todos los datos locales.");
    }
  }
});

workspaceContent.addEventListener("input", (event) => {
  if (event.target.matches("[data-library-search]")) {
    librarySearchQuery = event.target.value;
    updateLibraryResults();
  }
});

workspaceContent.addEventListener("change", async (event) => {
  const input = event.target;
  if (input.matches("[data-action='switch-account']")) {
    persistState();
    const nextAccountId = input.value;
    try {
      await loadBackendAccount(accounts[nextAccountId]);
      activeAccountId = nextAccountId;
      appState = normalizeState(readStorageJson(`${accountStoragePrefix}${activeAccountId}`, null));
      const accountReminder = readStorageJson(`${accountStoragePrefix}${activeAccountId}.reminder`, appState.settings.reminderEnabled);
      appState.settings.reminderEnabled = accountReminder === true || accountReminder === "true";
      savedMoment = readStoredValue(`${accountStoragePrefix}${activeAccountId}.moment`, defaultMoment);
      if (!savedMoment || typeof savedMoment !== "object") savedMoment = defaultMoment;
      renderMoment(savedMoment);
      persistState();
      resetChatConversation();
      renderCurrentView();
      showToast("Se abrió la cuenta seleccionada.");
    } catch (error) {
      backendError = error.message;
      renderCurrentView();
      showToast(error.message);
    }
  } else if (input.matches("[data-library-category]")) {
    libraryCategoryFilter = input.value;
    updateLibraryResults();
  } else if (input.matches("[data-library-favorites]")) {
    libraryFavoritesOnly = input.checked;
    updateLibraryResults();
  } else if (input.dataset.action === "toggle-reminder") {
    const reminder = getRecord("reminders", input.dataset.id);
    if (!reminder) return;
    reminder.active = input.checked;
    recordSaveFeedback(input.checked ? "Recordatorio activado." : "Recordatorio desactivado.");
  } else if (input.dataset.action === "toggle-default-reminder") {
    appState.settings.reminderEnabled = input.checked;
    const saved = persistState();
    renderCurrentView();
    if (saved) showToast(input.checked ? "Recordatorio activado en este dispositivo." : "Recordatorio desactivado en este dispositivo.");
  }
});

const answers = [
  { words: ["carta", "mensaje", "borrador"], text: "Entra en Mensajes, selecciona «Escribir carta» y guarda el borrador. Queda en este dispositivo; enviarlo a otra persona requiere un backend que todavía no está conectado." },
  { words: ["biblioteca", "poema", "favorito", "categoría"], text: "En Poemas puedes buscar y filtrar la biblioteca general, guardar favoritos y compartir textos con su atribución. También puedes crear poemas privados, que permanecen separados y guardados en este dispositivo." },
  { words: ["recuerdo", "fotografía", "foto"], text: "En Recuerdos agrega un título, fecha, descripción y una imagen JPG, PNG, WebP o GIF de hasta 1 MB. Se conserva solo en este dispositivo." },
  { words: ["recordatorio", "aviso"], text: "En Recordatorios crea un elemento con fecha y usa la casilla para activarlo o desactivarlo. Los avisos no se envían cuando la página está cerrada." },
  { words: ["nota", "entendernos"], text: "En Notas para Entendernos crea notas personales o márcalas como compartidas. Esa etiqueta es local: no sincroniza con otra cuenta." },
  { words: ["perfil", "avatar", "nombre"], text: "Abre Mi Universo o Configuración para cambiar el nombre, la información personal y el avatar. Los cambios se guardan en este navegador." },
  { words: ["universo", "experiencia", "compart"], text: "Nuestro Universo reúne experiencias y recuerdos marcados como compartidos. No existe sincronización entre dispositivos en esta versión." },
  { words: ["configuración", "configuracion", "configurar", "exportar", "privacidad"], text: "En Configuración puedes crear invitaciones seguras para vincular cuentas, exportar tus datos locales o borrarlos. Los perfiles y contenidos todavía no se sincronizan entre dispositivos." },
  { words: ["desvincular"], text: "En Configuración puedes desvincular las cuentas. Los códigos de invitación anteriores quedan invalidados y no dan acceso al contenido de otras parejas." },
  { words: ["ayuda", "usar", "funciona", "opciones"], text: "Usa el menú para abrir cada sección. Los formularios guardan datos localmente; en Configuración puedes exportarlos y crear o cancelar invitaciones de un solo uso. No puedo consultar información privada ni datos de otra persona." }
];
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-question");
const chatReplies = document.querySelector("#chat-replies");

function resetChatConversation() {
  chatReplies.replaceChildren();
  chatInput.value = "";
  chatForm.reset();
}

function replyToQuestion(question) {
  const normalized = question.trim();
  if (!normalized) return;
  const userMessage = document.createElement("div");
  userMessage.className = "user-reply";
  userMessage.textContent = normalized;
  chatReplies.append(userMessage);
  const questionLower = normalized.toLocaleLowerCase("es");
  const match = answers.find((entry) => entry.words.some((word) => questionLower.includes(word)));
  const answer = match ? match.text : "Puedo explicar cómo usar las secciones de OUR BLUE, pero no consultar información privada. Pregunta por poemas, mensajes, recuerdos, recordatorios, notas, perfil o configuración.";
  const botMessage = document.createElement("div");
  botMessage.className = "assistant-reply";
  botMessage.textContent = answer;
  chatReplies.append(botMessage);
  chatReplies.scrollTop = chatReplies.scrollHeight;
}

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => replyToQuestion(button.dataset.question));
});
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!chatForm.reportValidity()) return;
  replyToQuestion(chatInput.value);
  chatInput.value = "";
});

updateProfileHeader();
updateNotificationCount();
renderFeaturedPoem();
navigateTo(viewSpecs[window.location.hash.slice(1)] ? window.location.hash.slice(1) : "inicio", false);
loadBackendAccount(accounts[activeAccountId])
  .then(() => renderCurrentView())
  .catch((error) => {
    backendReady = false;
    backendError = error.message;
    if (currentView === "configuracion") renderCurrentView();
  });
