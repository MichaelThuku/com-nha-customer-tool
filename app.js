const seed = [
  {
    id: 1001,
    name: "Anh Nguyen",
    phone: "0412 555 120",
    email: "anh.nguyen@example.com",
    dob: "1994-11-20",
    createdAt: "2025-05-14",
    prefs: ["Vegetarian", "Window seating"],
    notes: [{ text: "Prefers quieter seating when available.", by: "Staff User", at: "2026-10-04T18:30:00" }],
    audit: [{ text: "Preference updated: Window seating", by: "Staff User", at: "2026-10-04T18:31:00" }],
    visits: [
      { id: 7001, date: "2026-10-04", time: "18:30", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Vegetarian pho", "Spring rolls"] },
      { id: 7002, date: "2026-08-17", time: "19:00", party: 4, occasion: "Birthday", status: "Completed", type: "Reservation", orders: ["Vegan curry", "Rice", "Spring rolls"] },
      { id: 7003, date: "2026-06-09", time: "18:45", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Vegetarian pho"] },
      { id: 7004, date: "2026-03-21", time: "19:15", party: 3, occasion: "", status: "Completed", type: "Reservation", orders: ["Tofu claypot", "Rice"] },
      { id: 7005, date: "2025-12-11", time: "18:10", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Vegetarian pho"] },
      { id: 7006, date: "2025-09-02", time: "19:30", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Vegan curry"] },
      { id: 7007, date: "2025-07-05", time: "18:20", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Vegetarian pho"] },
      { id: 7008, date: "2025-05-14", time: "18:00", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Spring rolls", "Vegetarian pho"] }
    ]
  },
  {
    id: 1002,
    name: "Sophie Martin",
    phone: "+61 433 901 442",
    email: "sophie.martin@example.com",
    dob: "1998-03-22",
    createdAt: "2026-02-18",
    prefs: ["Allergy / dietary requirement", "Outdoor seating"],
    notes: [{ text: "Peanut allergy-related dining requirement.", by: "Staff User", at: "2026-09-21T19:10:00" }],
    audit: [{ text: "Dietary requirement added", by: "Staff User", at: "2026-09-21T19:11:00" }],
    visits: [
      { id: 7101, date: "2026-09-21", time: "19:15", party: 3, occasion: "", status: "Completed", type: "Reservation", orders: ["Lemongrass chicken", "Rice"] },
      { id: 7102, date: "2026-05-16", time: "18:45", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Pho bò"] },
      { id: 7103, date: "2026-02-18", time: "19:00", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Pho bò", "Spring rolls"] }
    ]
  },
  {
    id: 1003,
    name: "Daniel Lee",
    phone: "0401 774 226",
    email: "daniel.lee@example.com",
    dob: "2000-12-02",
    createdAt: "2026-09-29",
    prefs: ["Favourite dish"],
    notes: [],
    audit: [],
    visits: [
      { id: 7201, date: "2026-09-29", time: "18:40", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Bún bò Huế"] }
    ]
  },
  {
    id: 1004,
    name: "Mia Chen",
    phone: "0419 882 311",
    email: "mia.chen@example.com",
    dob: "1991-11-17",
    createdAt: "2026-10-12",
    prefs: ["Vegan", "Quiet seating"],
    notes: [{ text: "Likes a quieter table if possible.", by: "Manager User", at: "2026-10-12T19:00:00" }],
    audit: [],
    visits: [
      { id: 7301, date: "2026-10-12", time: "19:00", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Vegan curry", "Rice"] },
      { id: 7302, date: "2026-10-26", time: "18:30", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Vegan pho"] },
      { id: 7303, date: "2026-11-03", time: "18:45", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Tofu claypot"] }
    ]
  },
  {
    id: 1005,
    name: "Tom Williams",
    phone: "0422 111 987",
    email: "",
    dob: "",
    createdAt: "2024-08-12",
    prefs: [],
    notes: [],
    audit: [],
    visits: [
      { id: 7401, date: "2024-08-12", time: "19:00", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Pho bò"] }
    ]
  },
  {
    id: 1006,
    name: "Linh Tran",
    phone: "0438 660 214",
    email: "linh.tran@example.com",
    dob: "1993-07-09",
    createdAt: "2025-11-28",
    prefs: ["Window seating", "Favourite dish"],
    notes: [{ text: "Often orders to share and prefers a window table.", by: "Staff User", at: "2026-09-15T18:15:00" }],
    audit: [],
    visits: [
      { id: 7501, date: "2026-10-18", time: "18:30", party: 3, occasion: "", status: "Completed", type: "Reservation", orders: ["Pho bò", "Spring rolls"] },
      { id: 7502, date: "2026-09-15", time: "18:15", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Bún bò Huế"] },
      { id: 7503, date: "2026-07-22", time: "19:00", party: 4, occasion: "Family gathering", status: "Completed", type: "Reservation", orders: ["Pho bò", "Rice", "Spring rolls"] },
      { id: 7504, date: "2026-04-03", time: "18:45", party: 2, occasion: "", status: "Completed", type: "Reservation", orders: ["Pho bò"] },
      { id: 7505, date: "2025-11-28", time: "19:10", party: 2, occasion: "", status: "Completed", type: "Walk-in", orders: ["Spring rolls", "Pho bò"] }
    ]
  }
];

const seedReservations = [
  { id: 9001, customerId: 1001, date: "2026-11-13", time: "18:30", party: 2, occasion: "", note: "", status: "Booked", type: "Reservation" },
  { id: 9002, customerId: 1002, date: "2026-11-13", time: "19:00", party: 3, occasion: "", note: "", status: "Booked", type: "Reservation" },
  { id: 9003, customerId: 1004, date: "2026-11-11", time: "19:15", party: 2, occasion: "", note: "", status: "Booked", type: "Reservation" },
  { id: 9004, customerId: 1003, date: "2026-11-02", time: "18:45", party: 2, occasion: "", note: "", status: "No-show", type: "Reservation" },
  { id: 9005, customerId: 1002, date: "2026-10-21", time: "19:00", party: 4, occasion: "", note: "", status: "Cancelled", type: "Reservation" },
  { id: 9006, customerId: 1006, date: "2026-11-12", time: "18:45", party: 2, occasion: "", note: "", status: "Booked", type: "Reservation" }
];

const defaultCategories = [
  "Vegan",
  "Vegetarian",
  "Allergy / dietary requirement",
  "Window seating",
  "Outdoor seating",
  "Quiet seating",
  "Favourite dish",
  "Special occasion"
];

const defaultAccounts = [
  { id: 1, username: "staff", password: "staff123", name: "Cơm Nhà Staff", role: "staff", active: true },
  { id: 2, username: "manager", password: "manager123", name: "Restaurant Manager", role: "manager", active: true }
];

const defaultSettings = {
  thresholds: { occasional: 2, regular: 5, frequent: 8 },
  service: { gracePeriod: 20, defaultDuration: 90, depositThreshold: 8, largeParty: 8 },
  restaurant: {
    phone: "",
    email: "",
    openingHours: "Tue–Sun 5:00 pm – late",
    surcharge: 1.1,
    message: "For parties above 7, confirm deposit requirements with the manager."
  },
  alerts: { dietary: true, loyalArrival: true, incomplete: true, birthdayWindow: 14, lapsedDays: 90 },
  panels: { customer: true, service: true, preference: true, attention: true, quality: true },
  retention: { oneoff: 24, occasional: 36, regular: 60, frequent: 60 }
};

const STORAGE = {
  customers: "cnCustomersV7",
  reservations: "cnReservationsV7",
  categories: "cnCategoriesV7",
  settings: "cnSettingsV7",
  accounts: "cnAccountsV7",
  session: "cnSessionV7"
};

const clone = value => JSON.parse(JSON.stringify(value));
let customers = JSON.parse(localStorage.getItem(STORAGE.customers) || "null") || clone(seed);
let reservations = JSON.parse(localStorage.getItem(STORAGE.reservations) || "null") || clone(seedReservations);
let categories = JSON.parse(localStorage.getItem(STORAGE.categories) || "null") || clone(defaultCategories);
let settings = mergeDeep(clone(defaultSettings), JSON.parse(localStorage.getItem(STORAGE.settings) || "null") || {});
let accounts = JSON.parse(localStorage.getItem(STORAGE.accounts) || "null") || clone(defaultAccounts);
let session = null;
let activeId = null;
let newPrefs = [];
let serviceMode = "reservation";
let profileId = null;
let profileEditPrefs = [];
let pendingCompletion = null;
let customerFrequencyFilter = null;

const $ = id => document.getElementById(id);
const digits = value => String(value || "").replace(/\D/g, "");
const esc = value => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");
const today = () => new Date().toISOString().slice(0, 10);

function mergeDeep(base, incoming) {
  if (!incoming || typeof incoming !== "object") return base;
  Object.keys(incoming).forEach(key => {
    if (incoming[key] && typeof incoming[key] === "object" && !Array.isArray(incoming[key]) && base[key] && typeof base[key] === "object") {
      base[key] = mergeDeep(base[key], incoming[key]);
    } else {
      base[key] = incoming[key];
    }
  });
  return base;
}

function save() {
  localStorage.setItem(STORAGE.customers, JSON.stringify(customers));
  localStorage.setItem(STORAGE.reservations, JSON.stringify(reservations));
  localStorage.setItem(STORAGE.categories, JSON.stringify(categories));
  localStorage.setItem(STORAGE.settings, JSON.stringify(settings));
  localStorage.setItem(STORAGE.accounts, JSON.stringify(accounts));
  refreshAll();
}

function resetDemoData() {
  if (!confirm("Reset all prototype data and settings back to the supplied demo version?")) return;
  customers = clone(seed);
  reservations = clone(seedReservations);
  categories = clone(defaultCategories);
  settings = clone(defaultSettings);
  accounts = clone(defaultAccounts);
  profileId = null;
  customerFrequencyFilter = null;
  save();
  alert("Demo data reset.");
}

function refreshAll() {
  renderRecent();
  renderCustomers($("customer-search")?.value || "");
  renderArrivals();
  updateDesk();
  renderInsights();
  renderSettings();
  if (profileId) renderProfile(profileId);
}

function normalizeAUPhone(value) {
  let d = digits(value);
  if (d.startsWith("001161")) d = "0" + d.slice(6);
  else if (d.startsWith("61") && d.length >= 11) d = "0" + d.slice(2);
  return d;
}

function formatPhone(value) {
  const d = normalizeAUPhone(value);
  if (d.length === 10) return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`;
  return String(value || "").trim();
}

function findPhone(value) {
  const normalized = normalizeAUPhone(value);
  if (!normalized) return null;
  return customers.find(c => normalizeAUPhone(c.phone) === normalized) || null;
}

function addAudit(customer, text) {
  customer.audit = customer.audit || [];
  customer.audit.push({
    text,
    by: session?.name || (session?.role === "manager" ? "Manager User" : "Staff User"),
    at: new Date().toISOString()
  });
}

function completed(customer) {
  return customer.visits.filter(v => v.status === "Completed").length;
}

function frequencyInfo(customer) {
  const n = completed(customer);
  const t = settings.thresholds;
  if (n >= t.frequent) return { label: "Frequent", cls: "freq-frequent" };
  if (n >= t.regular) return { label: "Regular", cls: "freq-regular" };
  if (n >= t.occasional) return { label: "Occasional", cls: "freq-occasional" };
  return { label: "New", cls: "freq-new" };
}

function badge(element, customer) {
  const f = frequencyInfo(customer);
  element.textContent = `${f.label} customer`;
  element.className = `frequency-badge ${f.cls}`;
}

function lastVisit(customer) {
  return customer.visits
    .filter(v => v.status === "Completed")
    .slice()
    .sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`))[0] || null;
}

function daysSince(date) {
  const ms = new Date() - new Date(`${date}T00:00:00`);
  return Math.max(0, Math.floor(ms / 86400000));
}

function birthdayDays(dob) {
  if (!dob) return null;
  const now = new Date();
  const d = new Date(`${dob}T00:00:00`);
  const next = new Date(now.getFullYear(), d.getMonth(), d.getDate());
  if (next < now) next.setFullYear(now.getFullYear() + 1);
  return Math.ceil((next - now) / 86400000);
}

function renderFlags(element, customer) {
  const flags = [];
  if (customer.prefs.some(p => /allergy|dietary/i.test(p))) {
    flags.push(["important", "⚠ Dietary requirement"]);
  }
  const birthday = birthdayDays(customer.dob);
  if (birthday !== null && birthday <= settings.alerts.birthdayWindow) {
    flags.push(["info", `● Birthday in ${birthday} day${birthday === 1 ? "" : "s"}`]);
  }
  element.innerHTML = flags.map(([type, text]) => `<span class="flag flag-${type}">${esc(text)}</span>`).join("");
  element.classList.toggle("hidden", !flags.length);
}

function goodToKnow(customer) {
  const last = lastVisit(customer);
  const f = frequencyInfo(customer);
  const birthday = birthdayDays(customer.dob);
  const lastOrder = last?.orders?.length ? last.orders.join(", ") : "No order recorded";
  const items = [
    ["Customer level", f.label],
    ["Last visit", last ? `${daysSince(last.date)} days ago` : "No completed visit"],
    ["Preferences", customer.prefs.length ? customer.prefs.slice(0, 2).join(" • ") : "None recorded"],
    ["Last order", lastOrder]
  ];
  if (birthday !== null && birthday <= 30) items.push(["Birthday", `In ${birthday} days`]);
  return `<div class="good-grid">${items.map(([key, value]) => `<div class="good-item"><strong>${esc(key)}</strong>${esc(value)}</div>`).join("")}</div>`;
}

function login(username, password) {
  const account = accounts.find(a => a.active && a.username.toLowerCase() === username.trim().toLowerCase() && a.password === password);
  if (!account) return false;
  session = { id: account.id, username: account.username, name: account.name, role: account.role };
  sessionStorage.setItem(STORAGE.session, JSON.stringify(session));
  openApp();
  return true;
}

function openApp() {
  $("login-screen").classList.add("hidden");
  $("app-shell").classList.remove("hidden");
  $("signed-in-name").textContent = session.name;
  $("signed-in-role").textContent = session.role === "manager" ? "Manager access" : "Staff access";
  $("user-avatar").textContent = session.role === "manager" ? "M" : "S";
  document.querySelectorAll(".manager-nav").forEach(el => el.classList.toggle("hidden", session.role !== "manager"));
  switchView("reservation");
  setServiceMode("reservation");
  refreshAll();
}

function logout() {
  session = null;
  sessionStorage.removeItem(STORAGE.session);
  $("app-shell").classList.add("hidden");
  $("login-screen").classList.remove("hidden");
  $("login-form").reset();
  $("login-error").classList.add("hidden");
}

function switchView(view) {
  if (["insights", "settings"].includes(view) && session?.role !== "manager") return;
  document.querySelectorAll(".view").forEach(el => el.classList.remove("active-view"));
  $(`${view}-view`).classList.add("active-view");
  document.querySelectorAll(".nav").forEach(el => el.classList.toggle("active", el.dataset.view === view));
  if (view === "customers") renderCustomers($("customer-search").value || "");
  if (view === "insights") renderInsights();
  if (view === "settings") renderSettings();
}

function setServiceMode(mode) {
  serviceMode = mode;
  $("mode-reservation").classList.toggle("active", mode === "reservation");
  $("mode-walkin").classList.toggle("active", mode === "walkin");
  $("identity-title").textContent = mode === "reservation" ? "Who’s calling?" : "Who just walked in?";
  $("identity-help").textContent = mode === "reservation"
    ? "Enter the phone number first. +61 and 04 formats are recognised as the same Australian number."
    : "Enter the guest’s phone number first so existing customer details can be recognised.";
  resetFlow(false);
}

function hideFlow() {
  ["existing", "new-customer", "quick-update", "reservation-form", "walkin-form", "success"].forEach(id => $(id).classList.add("hidden"));
}

function resetFlow(clearPhone = true) {
  activeId = null;
  newPrefs = [];
  hideFlow();
  $("lookup-msg").classList.add("hidden");
  if (clearPhone) $("phone").value = "";
}

function checkCustomer() {
  const phone = $("phone").value.trim();
  if (normalizeAUPhone(phone).length < 8) {
    $("lookup-msg").textContent = "Please enter a valid phone number.";
    $("lookup-msg").classList.remove("hidden");
    return;
  }
  $("lookup-msg").classList.add("hidden");
  hideFlow();
  const customer = findPhone(phone);
  if (customer) {
    activeId = customer.id;
    showExisting(customer);
    $("existing").classList.remove("hidden");
  } else {
    newPrefs = [];
    $("new-phone").value = formatPhone(phone);
    $("new-name").value = "";
    $("new-email").value = "";
    $("new-dob").value = "";
    renderNewCats();
    $("new-customer").classList.remove("hidden");
  }
}

function showExisting(customer) {
  $("ex-name").textContent = customer.name;
  $("ex-contact").textContent = `${formatPhone(customer.phone)} • ${customer.email || "No email"}`;
  $("ex-visits").textContent = completed(customer);
  $("ex-notes").textContent = customer.notes.length;
  badge($("ex-frequency"), customer);
  renderFlags($("important-flags"), customer);
  $("good-to-know-content").innerHTML = goodToKnow(customer);
  $("ex-prefs").innerHTML = customer.prefs.length
    ? customer.prefs.map(p => `<span class="chip">${esc(p)}</span>`).join("")
    : `<span class="muted">No preferences recorded.</span>`;
  $("ex-note").textContent = customer.notes.at(-1)?.text || "No notes recorded.";
  $("existing-continue").textContent = serviceMode === "reservation" ? "Continue to Reservation" : "Continue as Walk-in";
}

function renderNewCats() {
  $("new-cats").innerHTML = categories.map(category => `
    <button type="button" class="cat ${newPrefs.includes(category) ? "selected" : ""}" data-cat="${esc(category)}">
      ${newPrefs.includes(category) ? "✓ " : ""}${esc(category)}
    </button>`).join("");
  $("new-cats").querySelectorAll(".cat").forEach(button => {
    button.onclick = () => {
      const category = button.dataset.cat;
      const i = newPrefs.indexOf(category);
      if (i >= 0) newPrefs.splice(i, 1);
      else newPrefs.push(category);
      renderNewCats();
    };
  });
}

function saveNewCustomer() {
  const name = $("new-name").value.trim();
  const phone = $("new-phone").value.trim();
  if (!name) {
    alert("Please enter the customer's name.");
    return;
  }
  const existing = findPhone(phone);
  if (existing) {
    activeId = existing.id;
    hideFlow();
    showExisting(existing);
    $("existing").classList.remove("hidden");
    return;
  }
  const customer = {
    id: Date.now(),
    name,
    phone: formatPhone(phone),
    email: $("new-email").value.trim(),
    dob: $("new-dob").value,
    createdAt: today(),
    prefs: [...newPrefs],
    notes: [],
    audit: [],
    visits: []
  };
  addAudit(customer, "Customer profile created");
  customers.push(customer);
  activeId = customer.id;
  save();
  continueService(customer);
}

function renderEditCats(customer) {
  $("edit-cats").innerHTML = categories.map(category => `
    <button type="button" class="cat ${customer.prefs.includes(category) ? "selected" : ""}" data-cat="${esc(category)}">
      ${customer.prefs.includes(category) ? "✓ " : ""}${esc(category)}
    </button>`).join("");
  $("edit-cats").querySelectorAll(".cat").forEach(button => {
    button.onclick = () => {
      const category = button.dataset.cat;
      const i = customer.prefs.indexOf(category);
      if (i >= 0) {
        customer.prefs.splice(i, 1);
        addAudit(customer, `Preference removed: ${category}`);
      } else {
        customer.prefs.push(category);
        addAudit(customer, `Preference added: ${category}`);
      }
      save();
      renderEditCats(customer);
    };
  });
}

function quickEdit() {
  const customer = customers.find(c => c.id === activeId);
  if (!customer) return;
  $("existing").classList.add("hidden");
  renderEditCats(customer);
  $("quick-note").value = "";
  $("quick-update").classList.remove("hidden");
}

function saveQuickUpdate() {
  const customer = customers.find(c => c.id === activeId);
  if (!customer) return;
  const note = $("quick-note").value.trim();
  if (note) {
    customer.notes.push({ text: note, by: session?.name || "Staff User", at: new Date().toISOString() });
    addAudit(customer, "Staff note added");
  }
  save();
  $("quick-update").classList.add("hidden");
  showExisting(customer);
  $("existing").classList.remove("hidden");
}

function continueService(customer = customers.find(c => c.id === activeId)) {
  if (!customer) return;
  if (serviceMode === "reservation") openReservation(customer);
  else openWalkin(customer);
}

function openReservation(customer) {
  hideFlow();
  $("reservation-for").textContent = `For ${customer.name} • ${formatPhone(customer.phone)}`;
  $("res-date").value = today();
  $("res-time").value = "";
  $("res-party").value = 2;
  $("res-occasion").value = "";
  $("res-note").value = "";
  $("reservation-form").classList.remove("hidden");
  updateReservationPolicy();
}

function updateReservationPolicy() {
  if (!$("reservation-policy")) return;
  const party = Number($("res-party").value || 0);
  const messages = [];
  if (party >= settings.service.depositThreshold) messages.push(`Deposit review applies for party size ${party}.`);
  if (party > settings.service.largeParty) messages.push("Manager review recommended for this large party.");
  $("reservation-policy").textContent = messages.length ? messages.join(" ") : `Standard booking. No-show review begins after ${settings.service.gracePeriod} minutes.`;
  $("reservation-policy").classList.toggle("policy-alert", messages.length > 0);
}

function saveReservation() {
  const customer = customers.find(c => c.id === activeId);
  if (!customer) return;
  const date = $("res-date").value;
  const time = $("res-time").value;
  const party = Number($("res-party").value);
  if (!date || !time || party < 1) {
    alert("Please enter the date, time and party size.");
    return;
  }
  const reservation = {
    id: Date.now(),
    customerId: customer.id,
    date,
    time,
    party,
    occasion: $("res-occasion").value,
    note: $("res-note").value.trim(),
    status: "Booked",
    type: "Reservation"
  };
  reservations.push(reservation);
  addAudit(customer, `Reservation created for ${date} ${time}`);
  save();
  const policy = party >= settings.service.depositThreshold ? " • Deposit review required" : "";
  showSuccess("RESERVATION SAVED", `Table booked for ${customer.name}`, `${date} at ${time} • Party of ${party}${policy}`);
}

function openWalkin(customer) {
  hideFlow();
  $("walkin-for").textContent = `For ${customer.name} • ${formatPhone(customer.phone)}`;
  $("walkin-party").value = 2;
  $("walkin-occasion").value = "";
  $("walkin-note").value = "";
  $("walkin-form").classList.remove("hidden");
}

function saveWalkin() {
  const customer = customers.find(c => c.id === activeId);
  if (!customer) return;
  const party = Number($("walkin-party").value);
  if (party < 1) {
    alert("Please enter the party size.");
    return;
  }
  const now = new Date();
  const visit = {
    id: Date.now(),
    date: today(),
    time: now.toTimeString().slice(0, 5),
    party,
    occasion: $("walkin-occasion").value,
    note: $("walkin-note").value.trim(),
    status: "Arrived",
    type: "Walk-in",
    orders: []
  };
  customer.visits.push(visit);
  addAudit(customer, "Walk-in arrival recorded");
  save();
  showSuccess("WALK-IN RECORDED", `${customer.name} has arrived`, `Party of ${party} • ${visit.time}`);
}

function showSuccess(kicker, title, text) {
  hideFlow();
  $("success-kicker").textContent = kicker;
  $("success-title").textContent = title;
  $("success-text").textContent = text;
  $("success").classList.remove("hidden");
}

function statusClass(status) {
  return `status-${status.toLowerCase().replace(/\s+/g, "")}`;
}

function renderArrivals() {
  const rows = [];
  reservations.forEach(reservation => {
    rows.push({ customer: customers.find(c => c.id === reservation.customerId), record: reservation, source: "reservation" });
  });
  customers.forEach(customer => {
    customer.visits.filter(v => v.status === "Arrived" && v.type === "Walk-in").forEach(visit => rows.push({ customer, record: visit, source: "visit" }));
  });
  rows.sort((a, b) => `${b.record.date}${b.record.time}`.localeCompare(`${a.record.date}${a.record.time}`));

  $("arrival-list").innerHTML = rows.slice(0, 14).map(({ customer, record, source }) => {
    if (!customer) return "";
    const f = frequencyInfo(customer);
    let actions = "";
    if (record.status === "Booked") {
      actions = `
        <button class="mini-btn arrive" data-action="arrive" data-source="${source}" data-customer="${customer.id}" data-id="${record.id}">Mark Arrived</button>
        <button class="mini-btn bad" data-action="noshow" data-source="${source}" data-customer="${customer.id}" data-id="${record.id}">No-show</button>
        <button class="mini-btn" data-action="cancel" data-source="${source}" data-customer="${customer.id}" data-id="${record.id}">Cancel</button>`;
    } else if (record.status === "Arrived") {
      actions = `<button class="mini-btn complete" data-action="complete" data-source="${source}" data-customer="${customer.id}" data-id="${record.id}">Complete Visit</button>`;
    }
    return `
      <div class="arrival-item frequency-card ${f.cls}">
        <button class="arrival-customer" data-open-customer="${customer.id}">
          <strong>${esc(customer.name)}</strong>
          <span>${esc(record.type || "Reservation")} • ${esc(formatPhone(customer.phone))}</span>
          <span class="frequency-badge ${f.cls}">${f.label}</span>
        </button>
        <div>
          <strong>${esc(record.date)} • ${esc(record.time || "")}</strong>
          <span>Party of ${record.party}${record.occasion ? ` • ${esc(record.occasion)}` : ""}</span>
          <span class="status-badge ${statusClass(record.status)}">${esc(record.status)}</span>
        </div>
        <div class="row-actions">${actions}</div>
      </div>`;
  }).join("") || `<p class="muted">No current bookings or arrivals.</p>`;

  $("arrival-list").querySelectorAll("[data-action]").forEach(button => {
    button.onclick = () => updateStatus(Number(button.dataset.customer), Number(button.dataset.id), button.dataset.action, button.dataset.source);
  });
  $("arrival-list").querySelectorAll("[data-open-customer]").forEach(button => {
    button.onclick = () => {
      switchView("customers");
      showProfile(Number(button.dataset.openCustomer));
    };
  });
}

function updateStatus(customerId, recordId, action, source) {
  const customer = customers.find(c => c.id === customerId);
  if (!customer) return;
  const next = { arrive: "Arrived", complete: "Completed", noshow: "No-show", cancel: "Cancelled" }[action];
  if (!next) return;

  if (action === "complete") {
    const visit = customer.visits.find(v => v.id === recordId);
    if (!visit) return;
    pendingCompletion = { customerId, recordId };
    $("complete-customer").textContent = `${customer.name} • ${visit.type} • Party of ${visit.party}`;
    $("complete-orders").value = visit.orders?.join(", ") || "";
    $("complete-note").value = "";
    $("complete-modal").classList.remove("hidden");
    return;
  }

  if (source === "reservation") {
    const reservation = reservations.find(r => r.id === recordId);
    if (!reservation) return;
    reservation.status = next;
    addAudit(customer, `Reservation status changed to ${next}`);
    if (next === "Arrived") {
      const existingVisit = customer.visits.find(v => v.id === reservation.id);
      if (!existingVisit) {
        customer.visits.push({
          id: reservation.id,
          date: reservation.date,
          time: reservation.time,
          party: reservation.party,
          occasion: reservation.occasion,
          note: reservation.note,
          status: "Arrived",
          type: "Reservation",
          orders: []
        });
      }
    }
  } else {
    const visit = customer.visits.find(v => v.id === recordId);
    if (!visit) return;
    visit.status = next;
    addAudit(customer, `Visit status changed to ${next}`);
  }
  save();
}

function saveCompletedVisit() {
  if (!pendingCompletion) return;
  const customer = customers.find(c => c.id === pendingCompletion.customerId);
  const visit = customer?.visits.find(v => v.id === pendingCompletion.recordId);
  if (!customer || !visit) return;
  visit.status = "Completed";
  visit.orders = $("complete-orders").value.split(",").map(v => v.trim()).filter(Boolean);
  const note = $("complete-note").value.trim();
  if (note) {
    customer.notes.push({ text: note, by: session?.name || "Staff User", at: new Date().toISOString() });
    addAudit(customer, "Staff note added at visit completion");
  }
  const reservation = reservations.find(r => r.id === visit.id);
  if (reservation) reservation.status = "Completed";
  addAudit(customer, "Visit completed");
  pendingCompletion = null;
  $("complete-modal").classList.add("hidden");
  save();
}

function closeCompletionModal() {
  pendingCompletion = null;
  $("complete-modal").classList.add("hidden");
}

function renderCustomers(query = "") {
  const text = query.toLowerCase().trim();
  const normalized = normalizeAUPhone(query);
  let rows = customers.filter(customer => {
    if (!query) return true;
    const phoneMatch = normalized.length > 0 && normalizeAUPhone(customer.phone).includes(normalized);
    return phoneMatch || customer.name.toLowerCase().includes(text) ||
      (customer.email || "").toLowerCase().includes(text);
  });
  if (customerFrequencyFilter) rows = rows.filter(c => frequencyInfo(c).label === customerFrequencyFilter);

  $("customer-list").innerHTML = rows.map(customer => {
    const f = frequencyInfo(customer);
    const last = lastVisit(customer);
    return `
      <button type="button" class="customer-item frequency-card ${f.cls}" data-id="${customer.id}">
        <div>
          <strong>${esc(customer.name)}</strong>
          <span>${esc(formatPhone(customer.phone))}</span>
          <span class="frequency-badge ${f.cls}">${f.label}</span>
        </div>
        <div>
          <strong>${completed(customer)} completed visit(s)</strong>
          <span>${last ? `Last visit ${esc(last.date)}` : "No completed visit"}</span>
        </div>
        <small class="pill">Open record →</small>
      </button>`;
  }).join("") || `<p class="muted">No matching customer.</p>`;

  $("customer-list").querySelectorAll(".customer-item").forEach(button => {
    button.onclick = () => showProfile(Number(button.dataset.id));
  });
}

function showFrequencyCustomers(label) {
  customerFrequencyFilter = label;
  $("customer-search").value = "";
  switchView("customers");
  renderCustomers();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProfile(id) {
  const customer = customers.find(c => c.id === id);
  if (!customer) return;
  profileId = id;
  $("profile-name").textContent = customer.name;
  $("profile-contact").textContent = `${formatPhone(customer.phone)} • ${customer.email || "No email"}`;
  badge($("profile-frequency"), customer);
  renderFlags($("profile-important-flags"), customer);
  $("profile-phone").textContent = formatPhone(customer.phone);
  $("profile-email").textContent = customer.email || "—";
  $("profile-dob").textContent = customer.dob || "—";
  $("profile-created").textContent = customer.createdAt || "—";
  $("profile-prefs").innerHTML = customer.prefs.length
    ? customer.prefs.map(p => `<span class="chip">${esc(p)}</span>`).join("")
    : `<span class="muted">No preferences.</span>`;
  $("profile-history").textContent = `${completed(customer)} completed visit(s), ${reservations.filter(r => r.customerId === customer.id).length} reservation record(s).`;

  $("visit-story-list").innerHTML = customer.visits.length
    ? customer.visits.slice().sort((a, b) => `${b.date}${b.time}`.localeCompare(`${a.date}${a.time}`)).map(visit => `
      <div class="timeline-item">
        <strong>${esc(visit.date)} • ${esc(visit.type)} • ${esc(visit.status)}</strong>
        <span>Party of ${visit.party}${visit.occasion ? ` • ${esc(visit.occasion)}` : ""}</span>
        <div class="timeline-order"><b>Ordered:</b> ${visit.orders?.length ? esc(visit.orders.join(", ")) : "No order recorded"}</div>
      </div>`).join("")
    : `<p class="muted">No visit history yet.</p>`;

  $("profile-notes").innerHTML = customer.notes.length
    ? customer.notes.slice().reverse().map(note => `
      <div class="profile-note"><p>${esc(note.text)}</p><small>${esc(note.by || "Staff User")} • ${new Date(note.at).toLocaleString("en-AU")}</small></div>`).join("")
    : `<p class="muted">No notes recorded yet.</p>`;

  $("profile-note-input").value = "";
  $("profile-audit").innerHTML = (customer.audit || []).length
    ? customer.audit.slice().reverse().map(entry => `
      <div class="audit-entry"><span>${esc(entry.text)}</span><small>${esc(entry.by)}<br>${new Date(entry.at).toLocaleString("en-AU")}</small></div>`).join("")
    : `<p class="muted">No changes recorded yet.</p>`;

  $("profile-read").classList.remove("hidden");
  $("profile-edit").classList.add("hidden");
  $("profile").classList.remove("hidden");
}

function showProfile(id) {
  renderProfile(id);
  $("profile").scrollIntoView({ behavior: "smooth", block: "start" });
}

function addProfileNote() {
  const customer = customers.find(c => c.id === profileId);
  if (!customer) return;
  const text = $("profile-note-input").value.trim();
  if (!text) {
    alert("Please enter a note before saving.");
    return;
  }
  customer.notes.push({ text, by: session?.name || "Staff User", at: new Date().toISOString() });
  addAudit(customer, "Staff note added");
  save();
  renderProfile(customer.id);
}

function beginEdit() {
  const customer = customers.find(c => c.id === profileId);
  if (!customer) return;
  $("edit-name").value = customer.name;
  $("edit-phone").value = formatPhone(customer.phone);
  $("edit-email").value = customer.email || "";
  $("edit-dob").value = customer.dob || "";
  profileEditPrefs = [...customer.prefs];
  renderProfileCats();
  $("profile-read").classList.add("hidden");
  $("profile-edit").classList.remove("hidden");
}

function renderProfileCats() {
  $("edit-profile-cats").innerHTML = categories.map(category => `
    <button type="button" class="cat ${profileEditPrefs.includes(category) ? "selected" : ""}" data-cat="${esc(category)}">
      ${profileEditPrefs.includes(category) ? "✓ " : ""}${esc(category)}
    </button>`).join("");
  $("edit-profile-cats").querySelectorAll(".cat").forEach(button => {
    button.onclick = () => {
      const category = button.dataset.cat;
      const i = profileEditPrefs.indexOf(category);
      if (i >= 0) profileEditPrefs.splice(i, 1);
      else profileEditPrefs.push(category);
      renderProfileCats();
    };
  });
}

function saveProfileEdit() {
  const customer = customers.find(c => c.id === profileId);
  if (!customer) return;
  const name = $("edit-name").value.trim();
  const phone = $("edit-phone").value.trim();
  if (!name || normalizeAUPhone(phone).length < 8) {
    alert("Please enter a valid name and phone number.");
    return;
  }
  const duplicate = customers.find(c => c.id !== customer.id && normalizeAUPhone(c.phone) === normalizeAUPhone(phone));
  if (duplicate) {
    alert(`That phone number already belongs to ${duplicate.name}.`);
    return;
  }

  if (customer.name !== name) addAudit(customer, `Name changed from ${customer.name} to ${name}`);
  if (normalizeAUPhone(customer.phone) !== normalizeAUPhone(phone)) addAudit(customer, "Phone number updated");
  if (customer.email !== $("edit-email").value.trim()) addAudit(customer, "Email updated");
  if (customer.dob !== $("edit-dob").value) addAudit(customer, "Birthday updated");
  if (JSON.stringify(customer.prefs.slice().sort()) !== JSON.stringify(profileEditPrefs.slice().sort())) addAudit(customer, "Preferences updated");

  customer.name = name;
  customer.phone = formatPhone(phone);
  customer.email = $("edit-email").value.trim();
  customer.dob = $("edit-dob").value;
  customer.prefs = [...profileEditPrefs];
  save();
  renderProfile(customer.id);
}

function renderRecent() {
  const rows = [];
  reservations.forEach(record => rows.push({ customer: customers.find(c => c.id === record.customerId), record }));
  customers.forEach(customer => customer.visits.forEach(record => rows.push({ customer, record })));
  rows.sort((a, b) => `${b.record.date}${b.record.time}`.localeCompare(`${a.record.date}${a.record.time}`));
  $("recent").innerHTML = rows.slice(0, 5).map(({ customer, record }) => customer ? `
    <div class="recent-mini"><strong>${esc(customer.name)}</strong><span>${esc(record.type || "Reservation")} • ${esc(record.date)} • ${esc(record.status)}</span></div>` : "").join("") || `<p class="muted">No activity yet.</p>`;
}

function updateDesk() {
  $("desk-customers").textContent = customers.length;
  $("desk-bookings").textContent = reservations.filter(r => ["Booked", "Arrived"].includes(r.status)).length;
  if ($("desk-service-message")) {
    $("desk-service-message").textContent = settings.restaurant.message || "No manager service message.";
  }
  if ($("desk-policy")) {
    $("desk-policy").textContent = `No-show review: ${settings.service.gracePeriod} min • Deposit review: party ${settings.service.depositThreshold}+ • Surcharge: ${settings.restaurant.surcharge}%`;
  }
}

function getRangeBounds() {
  const mode = $("insight-range")?.value || "all";
  const now = new Date();
  let start = null;
  let end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  if (mode === "today") {
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  } else if (mode === "week") {
    const day = (now.getDay() + 6) % 7;
    start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - day);
  } else if (mode === "month") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
  } else if (mode === "90") {
    start = new Date(now);
    start.setDate(start.getDate() - 89);
  } else if (mode === "custom") {
    const s = $("custom-start")?.value;
    const e = $("custom-end")?.value;
    start = s ? new Date(`${s}T00:00:00`) : null;
    end = e ? new Date(`${e}T23:59:59`) : end;
  }
  return { mode, start, end };
}

function inRange(date, bounds) {
  if (!bounds.start) return true;
  const d = new Date(`${date}T12:00:00`);
  return d >= bounds.start && d <= bounds.end;
}

function activityForRange() {
  const bounds = getRangeBounds();
  const visits = customers.flatMap(customer => customer.visits.map(visit => ({ ...visit, customerId: customer.id }))).filter(v => inRange(v.date, bounds));
  const bookingRecords = reservations.filter(r => inRange(r.date, bounds));
  return { bounds, visits, reservations: bookingRecords };
}

function renderInsights() {
  if (!$("stat-total")) return;
  const activity = activityForRange();
  const totalCustomers = customers.length || 1;
  const returning = customers.filter(c => completed(c) >= 2).length;
  const completedVisits = activity.visits.filter(v => v.status === "Completed");
  const walkins = activity.visits.filter(v => v.type === "Walk-in");
  const noShowCancelled = activity.reservations.filter(r => ["No-show", "Cancelled"].includes(r.status));
  const relevantParties = [...activity.visits, ...activity.reservations].filter(r => Number(r.party) > 0);
  const avgParty = relevantParties.length ? (relevantParties.reduce((sum, r) => sum + Number(r.party), 0) / relevantParties.length).toFixed(1) : "0";

  $("stat-total").textContent = customers.length;
  $("stat-returning").textContent = `${Math.round(returning / totalCustomers * 100)}%`;
  $("stat-completed").textContent = completedVisits.length;
  $("stat-noshow").textContent = `${Math.round(noShowCancelled.length / (activity.reservations.length || 1) * 100)}%`;
  $("stat-party").textContent = avgParty;
  $("stat-walkins").textContent = walkins.length;

  const counts = { New: 0, Occasional: 0, Regular: 0, Frequent: 0 };
  customers.forEach(c => counts[frequencyInfo(c).label]++);
  $("frequency-breakdown").innerHTML = Object.entries(counts).map(([label, count]) => {
    const cls = { New: "freq-new", Occasional: "freq-occasional", Regular: "freq-regular", Frequent: "freq-frequent" }[label];
    return `
      <button class="freq-row freq-action ${cls}" data-frequency="${label}">
        <span>${label}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(count / totalCustomers * 100)}%"></div></div><strong>${count}</strong>
      </button>`;
  }).join("");
  $("frequency-breakdown").querySelectorAll("[data-frequency]").forEach(button => {
    button.onclick = () => showFrequencyCustomers(button.dataset.frequency);
  });

  renderServiceSummary(activity);
  renderPreferenceSummary();
  renderOrderSummary(activity);
  renderAttention();
  renderDataQuality();
  applyPanelVisibility();
}

function renderServiceSummary(activity) {
  const completedCount = activity.visits.filter(v => v.status === "Completed").length;
  const walkins = activity.visits.filter(v => v.type === "Walk-in").length;
  const booked = activity.reservations.filter(r => r.status === "Booked").length;
  const noShows = activity.reservations.filter(r => r.status === "No-show").length;
  const cancelled = activity.reservations.filter(r => r.status === "Cancelled").length;
  const allActivity = [...activity.visits, ...activity.reservations];
  const avgParty = allActivity.length ? (allActivity.reduce((sum, r) => sum + Number(r.party || 0), 0) / allActivity.length).toFixed(1) : "0";

  $("service-summary").innerHTML = [
    ["Bookings", booked],
    ["Walk-ins", walkins],
    ["Completed", completedCount],
    ["No-shows", noShows],
    ["Cancelled", cancelled],
    ["Avg party", avgParty]
  ].map(([label, value]) => `<div class="service-metric"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join("");

  const hourCounts = {};
  activity.visits.filter(v => v.time).forEach(v => {
    const hour = Number(v.time.split(":")[0]);
    const label = hour < 12 ? `${hour}:00 am` : hour === 12 ? "12:00 pm" : `${hour - 12}:00 pm`;
    hourCounts[label] = (hourCounts[label] || 0) + 1;
  });
  const times = Object.entries(hourCounts).sort((a, b) => b[1] - a[1]).slice(0, 4);
  const max = Math.max(...times.map(([, count]) => count), 1);
  $("busiest-times").innerHTML = times.length ? times.map(([label, count]) => `
    <div class="bar-row"><span>${esc(label)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(count / max * 100)}%"></div></div><strong>${count}</strong></div>`).join("") : `<p class="muted">No completed visit times in this period.</p>`;
}

function renderPreferenceSummary() {
  const counts = {};
  customers.flatMap(c => c.prefs).forEach(p => counts[p] = (counts[p] || 0) + 1);
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = Math.max(...rows.map(([, count]) => count), 1);
  $("preference-summary").innerHTML = rows.length ? rows.map(([label, count]) => `
    <div class="bar-row"><span>${esc(label)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(count / max * 100)}%"></div></div><strong>${count}</strong></div>`).join("") : `<p class="muted">No preferences recorded.</p>`;
}

function renderOrderSummary(activity) {
  const counts = {};
  activity.visits.flatMap(v => v.orders || []).forEach(order => counts[order] = (counts[order] || 0) + 1);
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = Math.max(...rows.map(([, count]) => count), 1);
  $("order-summary").innerHTML = rows.length ? rows.map(([label, count]) => `
    <div class="bar-row"><span>${esc(label)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(count / max * 100)}%"></div></div><strong>${count}</strong></div>`).join("") : `<p class="muted">No order history in this period.</p>`;
}

function renderAttention() {
  const items = [];
  const alertSettings = settings.alerts;

  customers.forEach(customer => {
    const birthday = birthdayDays(customer.dob);
    if (birthday !== null && birthday <= alertSettings.birthdayWindow) {
      items.push({ icon: "🎂", title: `${customer.name}'s birthday is coming up`, text: `In ${birthday} day${birthday === 1 ? "" : "s"}` });
    }
  });

  if (alertSettings.loyalArrival) {
    reservations.filter(r => r.status === "Booked").forEach(reservation => {
      const customer = customers.find(c => c.id === reservation.customerId);
      if (!customer) return;
      const level = frequencyInfo(customer).label;
      if (["Regular", "Frequent"].includes(level)) {
        items.push({ icon: "★", title: `${level} customer arriving`, text: `${customer.name} • ${reservation.date} ${reservation.time}` });
      }
    });
  }

  customers.forEach(customer => {
    const level = frequencyInfo(customer).label;
    const last = lastVisit(customer);
    if (last && ["Regular", "Frequent"].includes(level) && daysSince(last.date) >= alertSettings.lapsedDays) {
      items.push({ icon: "↩", title: `${level} customer has not returned recently`, text: `${customer.name} • ${daysSince(last.date)} days since last visit` });
    }
  });

  if (alertSettings.dietary) {
    reservations.filter(r => r.status === "Booked").forEach(reservation => {
      const customer = customers.find(c => c.id === reservation.customerId);
      if (customer?.prefs.some(p => /allergy|dietary/i.test(p))) {
        items.push({ icon: "⚠", title: "Dietary requirement on upcoming booking", text: `${customer.name} • ${reservation.date} ${reservation.time}` });
      }
    });
  }

  if (alertSettings.incomplete) {
    customers.filter(c => !c.email || !c.dob || !c.prefs.length).slice(0, 4).forEach(customer => {
      const missing = [!customer.email ? "email" : "", !customer.dob ? "birthday" : "", !customer.prefs.length ? "preferences" : ""].filter(Boolean).join(", ");
      items.push({ icon: "…", title: "Incomplete customer profile", text: `${customer.name} • Missing ${missing}` });
    });
  }

  retentionDue().slice(0, 4).forEach(customer => {
    items.push({ icon: "⌛", title: "Data retention review due", text: `${customer.name} • ${retentionReason(customer)}` });
  });

  $("attention-list").innerHTML = items.slice(0, 10).map(item => `
    <div class="attention-item"><div class="attention-icon">${item.icon}</div><div><strong>${esc(item.title)}</strong><span>${esc(item.text)}</span></div><span>Review</span></div>`).join("") || `<p class="muted">Nothing needs attention right now.</p>`;
}

function renderDataQuality() {
  const total = customers.length || 1;
  const complete = customers.filter(c => c.email && c.dob && c.prefs.length).length;
  const rows = [
    ["Complete profiles", complete],
    ["Missing email", customers.filter(c => !c.email).length],
    ["Missing birthday", customers.filter(c => !c.dob).length],
    ["No preferences", customers.filter(c => !c.prefs.length).length]
  ];
  $("data-quality-summary").innerHTML = rows.map(([label, count]) => `
    <div class="bar-row"><span>${esc(label)}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(count / total * 100)}%"></div></div><strong>${count}</strong></div>`).join("");
}

function applyPanelVisibility() {
  const map = {
    "insight-customer-panel": settings.panels.customer,
    "insight-service-panel": settings.panels.service,
    "insight-preference-panel": settings.panels.preference,
    "insight-order-panel": settings.panels.preference,
    "insight-attention-panel": settings.panels.attention,
    "insight-quality-panel": settings.panels.quality
  };
  Object.entries(map).forEach(([id, visible]) => $(id)?.classList.toggle("hidden", !visible));
}

function renderSettings() {
  if (!$("threshold-occasional")) return;
  $("threshold-occasional").value = settings.thresholds.occasional;
  $("threshold-regular").value = settings.thresholds.regular;
  $("threshold-frequent").value = settings.thresholds.frequent;

  $("grace-period").value = settings.service.gracePeriod;
  $("default-duration").value = settings.service.defaultDuration;
  $("deposit-threshold").value = settings.service.depositThreshold;
  $("large-party").value = settings.service.largeParty;

  $("restaurant-phone").value = settings.restaurant.phone;
  $("restaurant-email").value = settings.restaurant.email;
  $("opening-hours").value = settings.restaurant.openingHours;
  $("surcharge").value = settings.restaurant.surcharge;
  $("service-message").value = settings.restaurant.message;

  $("alert-dietary").checked = settings.alerts.dietary;
  $("alert-arrival").checked = settings.alerts.loyalArrival;
  $("alert-incomplete").checked = settings.alerts.incomplete;
  $("birthday-window").value = settings.alerts.birthdayWindow;
  $("lapsed-days").value = settings.alerts.lapsedDays;

  $("panel-customer").checked = settings.panels.customer;
  $("panel-service").checked = settings.panels.service;
  $("panel-preference").checked = settings.panels.preference;
  $("panel-attention").checked = settings.panels.attention;
  $("panel-quality").checked = settings.panels.quality;

  $("retention-oneoff").value = settings.retention.oneoff;
  $("retention-occasional").value = settings.retention.occasional;
  $("retention-regular").value = settings.retention.regular;
  $("retention-frequent").value = settings.retention.frequent;

  renderCategoryList();
  renderStaffAccounts();
  renderRetention();
}

function renderCategoryList() {
  $("category-list").innerHTML = categories.map(category => `<span class="chip">${esc(category)} <button type="button" class="remove" data-cat="${esc(category)}">×</button></span>`).join("");
  $("category-list").querySelectorAll(".remove").forEach(button => {
    button.onclick = () => {
      categories = categories.filter(c => c !== button.dataset.cat);
      save();
    };
  });
}

function renderStaffAccounts() {
  $("staff-account-list").innerHTML = accounts.map(account => `
    <div class="account-row">
      <div><strong>${esc(account.name)}</strong><span>@${esc(account.username)} • ${account.role === "manager" ? "Manager" : "Staff"}</span></div>
      <button class="mini-btn ${account.active ? "" : "bad"}" data-account-toggle="${account.id}" ${session?.id === account.id ? "disabled" : ""}>${account.active ? "Deactivate" : "Activate"}</button>
    </div>`).join("");
  $("staff-account-list").querySelectorAll("[data-account-toggle]").forEach(button => {
    button.onclick = () => {
      const account = accounts.find(a => a.id === Number(button.dataset.accountToggle));
      if (!account) return;
      account.active = !account.active;
      save();
    };
  });
}

function addStaffAccount() {
  const username = $("staff-new-username").value.trim().toLowerCase();
  const name = $("staff-new-name").value.trim();
  const role = $("staff-new-role").value;
  const password = $("staff-new-password").value;
  if (!username || !name || !password) {
    alert("Enter a username, display name and demo password.");
    return;
  }
  if (accounts.some(a => a.username.toLowerCase() === username)) {
    alert("That username already exists.");
    return;
  }
  accounts.push({ id: Date.now(), username, password, name, role, active: true });
  $("staff-new-username").value = "";
  $("staff-new-name").value = "";
  $("staff-new-password").value = "demo123";
  save();
}

function monthsSince(date) {
  const a = new Date(`${date}T00:00:00`);
  const b = new Date();
  return (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth();
}

function retentionReference(customer) {
  const dates = [customer.createdAt, lastVisit(customer)?.date, customer.retentionReviewedAt].filter(Boolean).sort();
  return dates.at(-1) || customer.createdAt;
}

function retentionLimit(customer) {
  const count = completed(customer);
  const level = frequencyInfo(customer).label;
  if (count <= 1) return settings.retention.oneoff;
  if (level === "Occasional") return settings.retention.occasional;
  if (level === "Regular") return settings.retention.regular;
  return settings.retention.frequent;
}

function retentionDue() {
  return customers.filter(customer => {
    if (!customer.phone && customer.name.startsWith("De-identified")) return false;
    const reference = retentionReference(customer);
    return reference && monthsSince(reference) >= retentionLimit(customer);
  });
}

function retentionReason(customer) {
  const reference = retentionReference(customer);
  return `${monthsSince(reference)} months inactive/reviewed • ${frequencyInfo(customer).label}`;
}

function renderRetention() {
  const due = retentionDue();
  $("retention-review-list").innerHTML = due.length ? due.map(customer => `
    <div class="retention-row">
      <div><strong>${esc(customer.name)}</strong><span>${esc(formatPhone(customer.phone))} • ${frequencyInfo(customer).label}</span></div>
      <div><strong>${esc(retentionReason(customer))}</strong><span>Manager decision required. No automatic deletion.</span></div>
      <div class="retention-actions">
        <button data-retention="keep" data-id="${customer.id}">Keep</button>
        <button class="deid" data-retention="deid" data-id="${customer.id}">De-identify</button>
        <button class="delete" data-retention="delete" data-id="${customer.id}">Delete</button>
      </div>
    </div>`).join("") : `<p class="muted">No profiles are currently due for review.</p>`;

  $("retention-review-list").querySelectorAll("[data-retention]").forEach(button => {
    button.onclick = () => retentionAction(Number(button.dataset.id), button.dataset.retention);
  });
}

function retentionAction(id, action) {
  const customer = customers.find(c => c.id === id);
  if (!customer) return;
  if (action === "keep") {
    customer.retentionReviewedAt = today();
    addAudit(customer, "Retention review: manager chose Keep");
    save();
    return;
  }
  if (action === "deid") {
    if (!confirm(`De-identify ${customer.name}? Personal identifiers will be removed while visit statistics remain.`)) return;
    const originalName = customer.name;
    customer.name = `De-identified customer ${customer.id}`;
    customer.phone = "";
    customer.email = "";
    customer.dob = "";
    customer.prefs = [];
    customer.notes = [];
    customer.audit = [{ text: `Profile de-identified from ${originalName}`, by: session?.name || "Manager", at: new Date().toISOString() }];
    reservations = reservations.filter(r => r.customerId !== customer.id || ["Completed", "No-show", "Cancelled"].includes(r.status));
    save();
    return;
  }
  if (action === "delete") {
    if (!confirm(`Delete ${customer.name}'s customer profile? This prototype action cannot be undone.`)) return;
    customers = customers.filter(c => c.id !== id);
    reservations = reservations.filter(r => r.customerId !== id);
    if (profileId === id) {
      profileId = null;
      $("profile").classList.add("hidden");
    }
    save();
  }
}

function saveThresholds() {
  const occasional = Number($("threshold-occasional").value);
  const regular = Number($("threshold-regular").value);
  const frequent = Number($("threshold-frequent").value);
  if (!(occasional >= 1 && regular > occasional && frequent > regular)) {
    alert("Use increasing thresholds, for example 2, 5 and 8 visits.");
    return;
  }
  settings.thresholds = { occasional, regular, frequent };
  save();
  alert("Customer-frequency thresholds updated.");
}

function saveServiceSettings() {
  settings.service = {
    gracePeriod: Number($("grace-period").value),
    defaultDuration: Number($("default-duration").value),
    depositThreshold: Number($("deposit-threshold").value),
    largeParty: Number($("large-party").value)
  };
  save();
  alert("Reservation settings updated.");
}

function saveRestaurantSettings() {
  settings.restaurant = {
    phone: $("restaurant-phone").value.trim(),
    email: $("restaurant-email").value.trim(),
    openingHours: $("opening-hours").value.trim(),
    surcharge: Number($("surcharge").value),
    message: $("service-message").value.trim()
  };
  save();
  alert("Restaurant information updated.");
}

function saveAlertSettings() {
  settings.alerts = {
    dietary: $("alert-dietary").checked,
    loyalArrival: $("alert-arrival").checked,
    incomplete: $("alert-incomplete").checked,
    birthdayWindow: Number($("birthday-window").value),
    lapsedDays: Number($("lapsed-days").value)
  };
  save();
  alert("Service alerts updated.");
}

function savePanelSettings() {
  settings.panels = {
    customer: $("panel-customer").checked,
    service: $("panel-service").checked,
    preference: $("panel-preference").checked,
    attention: $("panel-attention").checked,
    quality: $("panel-quality").checked
  };
  save();
  alert("Insights panels updated.");
}

function saveRetentionSettings() {
  settings.retention = {
    oneoff: Number($("retention-oneoff").value),
    occasional: Number($("retention-occasional").value),
    regular: Number($("retention-regular").value),
    frequent: Number($("retention-frequent").value)
  };
  save();
  alert("Retention rules updated.");
}

function addCategory() {
  const value = $("new-category").value.trim();
  if (!value) return;
  if (!categories.some(c => c.toLowerCase() === value.toLowerCase())) {
    categories.push(value);
    $("new-category").value = "";
    save();
  }
}

function updateCustomRangeVisibility() {
  $("custom-range").classList.toggle("hidden", $("insight-range").value !== "custom");
  renderInsights();
}

/* Event wiring */
$("login-form").addEventListener("submit", event => {
  event.preventDefault();
  const ok = login($("login-username").value, $("login-password").value);
  $("login-error").classList.toggle("hidden", ok);
});

document.querySelectorAll(".demo-account").forEach(button => {
  button.onclick = () => {
    $("login-username").value = button.dataset.user;
    $("login-password").value = button.dataset.pass;
  };
});

document.querySelectorAll(".nav").forEach(button => button.onclick = () => switchView(button.dataset.view));
$("logout").onclick = logout;
$("mode-reservation").onclick = () => setServiceMode("reservation");
$("mode-walkin").onclick = () => setServiceMode("walkin");
$("reset-flow").onclick = () => resetFlow(true);
$("check").onclick = checkCustomer;
$("phone").onkeydown = event => { if (event.key === "Enter") checkCustomer(); };
$("cancel-new").onclick = () => resetFlow(true);
$("save-new").onclick = saveNewCustomer;
$("quick-edit").onclick = quickEdit;
$("existing-continue").onclick = () => continueService();
$("open-full-profile").onclick = () => {
  const id = activeId;
  switchView("customers");
  showProfile(id);
};
$("back-update").onclick = () => {
  const customer = customers.find(c => c.id === activeId);
  $("quick-update").classList.add("hidden");
  showExisting(customer);
  $("existing").classList.remove("hidden");
};
$("save-update").onclick = saveQuickUpdate;
$("back-res").onclick = () => {
  const customer = customers.find(c => c.id === activeId);
  $("reservation-form").classList.add("hidden");
  showExisting(customer);
  $("existing").classList.remove("hidden");
};
$("save-res").onclick = saveReservation;
$("res-party").oninput = updateReservationPolicy;
$("back-walkin").onclick = () => {
  const customer = customers.find(c => c.id === activeId);
  $("walkin-form").classList.add("hidden");
  showExisting(customer);
  $("existing").classList.remove("hidden");
};
$("save-walkin").onclick = saveWalkin;
$("next-action").onclick = () => resetFlow(true);
$("search-btn").onclick = () => {
  customerFrequencyFilter = null;
  renderCustomers($("customer-search").value);
};
$("customer-search").oninput = event => {
  customerFrequencyFilter = null;
  renderCustomers(event.target.value);
};
$("close-profile").onclick = () => {
  $("profile").classList.add("hidden");
  profileId = null;
};
$("edit-profile").onclick = beginEdit;
$("add-profile-note").onclick = addProfileNote;
$("cancel-profile-edit").onclick = () => renderProfile(profileId);
$("save-profile-edit").onclick = saveProfileEdit;

$("insight-range").onchange = updateCustomRangeVisibility;
$("custom-start").onchange = renderInsights;
$("custom-end").onchange = renderInsights;

$("save-thresholds").onclick = saveThresholds;
$("save-service-settings").onclick = saveServiceSettings;
$("save-restaurant-settings").onclick = saveRestaurantSettings;
$("save-alert-settings").onclick = saveAlertSettings;
$("save-panel-settings").onclick = savePanelSettings;
$("save-retention").onclick = saveRetentionSettings;
$("add-category").onclick = addCategory;
$("add-staff-account").onclick = addStaffAccount;
$("reset-demo-data").onclick = resetDemoData;

$("close-complete-modal").onclick = closeCompletionModal;
$("cancel-complete").onclick = closeCompletionModal;
$("save-complete").onclick = saveCompletedVisit;
$("complete-modal").onclick = event => { if (event.target === $("complete-modal")) closeCompletionModal(); };

try {
  const saved = JSON.parse(sessionStorage.getItem(STORAGE.session));
  if (saved && ["staff", "manager"].includes(saved.role)) {
    const account = accounts.find(a => a.id === saved.id && a.active);
    if (account) {
      session = saved;
      openApp();
    }
  }
} catch (_) {}

refreshAll();
