const seedCustomers = [
  {
    id: 1001,
    fullName: "Anh Nguyen",
    phone: "0412 555 120",
    email: "anh.nguyen@example.com",
    dob: "1994-11-08",
    preferences: ["Window seating", "Vegetarian", "Sparkling water"],
    visits: [
      { date: "2026-10-04", partySize: 2, status: "Completed", occasion: "Dinner" },
      { date: "2026-08-17", partySize: 4, status: "Completed", occasion: "Birthday" }
    ],
    notes: [
      { text: "Celebrated a birthday on the previous visit.", by: "Staff User", at: "2026-08-17 20:15" },
      { text: "Prefers quieter seating when available.", by: "Staff User", at: "2026-10-04 18:30" }
    ]
  },
  {
    id: 1002,
    fullName: "Sophie Martin",
    phone: "0433 901 442",
    email: "sophie.martin@example.com",
    dob: "1998-03-22",
    preferences: ["No peanuts", "Outdoor seating"],
    visits: [
      { date: "2026-09-21", partySize: 3, status: "Completed", occasion: "Dinner" }
    ],
    notes: [
      { text: "Asked staff to note a peanut allergy-related dining requirement.", by: "Staff User", at: "2026-09-21 19:10" }
    ]
  },
  {
    id: 1003,
    fullName: "Daniel Lee",
    phone: "0401 774 226",
    email: "daniel.lee@example.com",
    dob: "2000-12-02",
    preferences: ["Favourite dish: Bún bò Huế"],
    visits: [],
    notes: []
  }
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

let customers = JSON.parse(localStorage.getItem("comNhaCustomers")) || seedCustomers;
let categories = JSON.parse(localStorage.getItem("comNhaCategories")) || defaultCategories;
let currentRole = localStorage.getItem("comNhaRole") || "staff";
let activeCustomerId = null;

function saveCustomers() {
  localStorage.setItem("comNhaCustomers", JSON.stringify(customers));
  updateDashboardStats();
}

function updateDashboardStats() {
  document.getElementById("total-customers").textContent = customers.length;
  document.getElementById("returning-customers").textContent =
    customers.filter(c => c.visits.length > 0).length;

  const today = new Date();
  const upcoming = customers.filter(c => {
    if (!c.dob) return false;
    const [y, m, d] = c.dob.split("-").map(Number);
    const thisYear = new Date(today.getFullYear(), m - 1, d);
    const next = thisYear < today ? new Date(today.getFullYear() + 1, m - 1, d) : thisYear;
    const diffDays = (next - today) / (1000 * 60 * 60 * 24);
    return diffDays <= 60;
  }).length;

  document.getElementById("birthday-count").textContent = upcoming;
}

function customerStatus(customer) {
  return customer.visits.length > 0 ? "Returning Customer" : "New Customer";
}

function normalisePhone(value) {
  return (value || "").replace(/\D/g, "");
}

function matches(customer, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const phoneQuery = normalisePhone(q);
  const phoneMatch = phoneQuery.length >= 3 && normalisePhone(customer.phone).includes(phoneQuery);
  return phoneMatch ||
    (customer.fullName || "").toLowerCase().includes(q) ||
    (customer.email || "").toLowerCase().includes(q);
}

function resultMarkup(customer) {
  const status = customerStatus(customer);
  const badgeClass = status.startsWith("Returning") ? "returning" : "new";
  return `
    <div class="result-item" data-customer-id="${customer.id}">
      <div>
        <h4>${customer.fullName}</h4>
        <p>${customer.phone || "No phone"} • ${customer.email || "No email"}</p>
      </div>
      <span class="badge ${badgeClass}">${status}</span>
    </div>
  `;
}

function renderResults(targetId, query) {
  const target = document.getElementById(targetId);
  const results = customers.filter(c => matches(c, query));

  target.innerHTML = results.length
    ? results.map(resultMarkup).join("")
    : `<div class="empty-state">No matching customer found.</div>`;

  target.querySelectorAll(".result-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = Number(item.dataset.customerId);
      showCustomerProfile(id);
      switchView("customers");
    });
  });
}

function showCustomerProfile(id) {
  const customer = customers.find(c => c.id === id);
  if (!customer) return;

  activeCustomerId = id;
  document.getElementById("profile-panel").classList.remove("hidden");
  document.getElementById("profile-name").textContent = customer.fullName;
  document.getElementById("profile-contact").textContent =
    `${customer.phone || "No phone"} • ${customer.email || "No email"}`;
  document.getElementById("profile-phone").textContent = customer.phone || "—";
  document.getElementById("profile-email").textContent = customer.email || "—";
  document.getElementById("profile-birthday").textContent =
    customer.dob ? new Date(customer.dob + "T00:00:00").toLocaleDateString("en-AU") : "—";
  document.getElementById("profile-visits-count").textContent = customer.visits.length;
  document.getElementById("customer-id-label").textContent = `Customer ID ${customer.id}`;

  const status = customerStatus(customer);
  const statusEl = document.getElementById("customer-status");
  statusEl.textContent = status;
  statusEl.className = `badge ${status.startsWith("Returning") ? "returning" : "new"}`;

  document.getElementById("preferences-list").innerHTML =
    customer.preferences.length
      ? customer.preferences.map(p => `<span class="chip">${p}</span>`).join("")
      : `<span class="muted">No preferences recorded.</span>`;

  renderQuickCategories(customer);

  document.getElementById("visit-history").innerHTML =
    customer.visits.length
      ? `
        <table class="visit-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Party Size</th>
              <th>Status</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            ${customer.visits.map(v => `
              <tr>
                <td>${new Date(v.date + "T00:00:00").toLocaleDateString("en-AU")}</td>
                <td>${v.partySize}</td>
                <td>${v.status}</td>
                <td>${v.occasion || "—"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `
      : `<div class="empty-state">No previous visits. This customer is currently classified as new.</div>`;

  document.getElementById("notes-list").innerHTML =
    customer.notes.length
      ? customer.notes.slice().reverse().map(n => `
          <div class="note">
            <p>${n.text}</p>
            <small>${n.by} • ${n.at}</small>
          </div>
        `).join("")
      : `<div class="empty-state">No customer notes recorded.</div>`;

  document.getElementById("profile-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function switchView(viewName) {
  if (viewName === "manager" && currentRole !== "manager") return;
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  document.getElementById(`${viewName}-view`).classList.add("active-view");

  function renderQuickCategories(customer) {
  const target = document.getElementById("quick-categories");
  target.innerHTML = categories.map(category => {
    const selected = customer.preferences.includes(category);
    return `<button type="button" class="category-btn ${selected ? "selected" : ""}" data-category="${category}">${selected ? "✓ " : ""}${category}</button>`;
  }).join("");

  target.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
      const value = button.dataset.category;
      const index = customer.preferences.indexOf(value);
      if (index >= 0) customer.preferences.splice(index, 1);
      else customer.preferences.push(value);
      saveCustomers();
      showCustomerProfile(customer.id);
      updateManagerStats();
    });
  });
}

function updateManagerStats() {
  const total = customers.length || 1;
  const dietaryTerms = ["Vegan", "Vegetarian", "Allergy / dietary requirement"];
  const returning = customers.filter(c => c.visits.length > 0).length;
  const dietary = customers.filter(c => c.preferences.some(p => dietaryTerms.includes(p))).length;
  const withPreferences = customers.filter(c => c.preferences.length > 0).length;
  const withBirthday = customers.filter(c => Boolean(c.dob)).length;
  const pct = n => `${Math.round((n / total) * 100)}%`;
  document.getElementById("pct-returning").textContent = pct(returning);
  document.getElementById("pct-dietary").textContent = pct(dietary);
  document.getElementById("pct-preferences").textContent = pct(withPreferences);
  document.getElementById("pct-birthday").textContent = pct(withBirthday);
}

function saveCategories() {
  localStorage.setItem("comNhaCategories", JSON.stringify(categories));
  renderManagerCategories();
  if (activeCustomerId !== null) {
    const c = customers.find(x => x.id === activeCustomerId);
    if (c) renderQuickCategories(c);
  }
}

function renderManagerCategories() {
  const target = document.getElementById("manager-category-list");
  if (!target) return;
  target.innerHTML = categories.map(category => `<span class="manager-category-item">${category}<button type="button" class="remove-category-btn" data-category="${category}">×</button></span>`).join("");
  target.querySelectorAll(".remove-category-btn").forEach(button => {
    button.addEventListener("click", () => {
      if (currentRole !== "manager") return;
      categories = categories.filter(c => c !== button.dataset.category);
      saveCategories();
    });
  });
}

function applyRole() {
  const isManager = currentRole === "manager";
  document.getElementById("role-select").value = currentRole;
  document.getElementById("sidebar-role").textContent = isManager ? "Manager access • Prototype" : "Staff access • Prototype";
  document.querySelectorAll(".manager-nav").forEach(el => el.classList.toggle("hidden", !isManager));
  if (!isManager && document.getElementById("manager-view").classList.contains("active-view")) switchView("dashboard");
}

document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  const titles = {
    dashboard: "Dashboard",
    customers: "Customers",
    manager: "Manager",
    about: "Prototype Notes"
  };
  document.getElementById("page-title").textContent = titles[viewName];
  if (viewName === "manager") {
    updateManagerStats();
    renderManagerCategories();
  }
}

function renderQuickCategories(customer) {
  const target = document.getElementById("quick-categories");
  target.innerHTML = categories.map(category => {
    const selected = customer.preferences.includes(category);
    return `<button type="button" class="category-btn ${selected ? "selected" : ""}" data-category="${category}">${selected ? "✓ " : ""}${category}</button>`;
  }).join("");

  target.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
      const value = button.dataset.category;
      const index = customer.preferences.indexOf(value);
      if (index >= 0) customer.preferences.splice(index, 1);
      else customer.preferences.push(value);
      saveCustomers();
      showCustomerProfile(customer.id);
      updateManagerStats();
    });
  });
}

function updateManagerStats() {
  const total = customers.length || 1;
  const dietaryTerms = ["Vegan", "Vegetarian", "Allergy / dietary requirement"];
  const returning = customers.filter(c => c.visits.length > 0).length;
  const dietary = customers.filter(c => c.preferences.some(p => dietaryTerms.includes(p))).length;
  const withPreferences = customers.filter(c => c.preferences.length > 0).length;
  const withBirthday = customers.filter(c => Boolean(c.dob)).length;
  const pct = n => `${Math.round((n / total) * 100)}%`;
  document.getElementById("pct-returning").textContent = pct(returning);
  document.getElementById("pct-dietary").textContent = pct(dietary);
  document.getElementById("pct-preferences").textContent = pct(withPreferences);
  document.getElementById("pct-birthday").textContent = pct(withBirthday);
}

function saveCategories() {
  localStorage.setItem("comNhaCategories", JSON.stringify(categories));
  renderManagerCategories();
  if (activeCustomerId !== null) {
    const c = customers.find(x => x.id === activeCustomerId);
    if (c) renderQuickCategories(c);
  }
}

function renderManagerCategories() {
  const target = document.getElementById("manager-category-list");
  if (!target) return;
  target.innerHTML = categories.map(category => `<span class="manager-category-item">${category}<button type="button" class="remove-category-btn" data-category="${category}">×</button></span>`).join("");
  target.querySelectorAll(".remove-category-btn").forEach(button => {
    button.addEventListener("click", () => {
      if (currentRole !== "manager") return;
      categories = categories.filter(c => c !== button.dataset.category);
      saveCategories();
    });
  });
}

function applyRole() {
  const isManager = currentRole === "manager";
  document.getElementById("role-select").value = currentRole;
  document.getElementById("sidebar-role").textContent = isManager ? "Manager access • Prototype" : "Staff access • Prototype";
  document.querySelectorAll(".manager-nav").forEach(el => el.classList.toggle("hidden", !isManager));
  if (!isManager && document.getElementById("manager-view").classList.contains("active-view")) switchView("dashboard");
}

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => switchView(item.dataset.view));
});

document.getElementById("role-select").addEventListener("change", e => {
  currentRole = e.target.value;
  localStorage.setItem("comNhaRole", currentRole);
  applyRole();
});

document.getElementById("add-category-btn").addEventListener("click", () => {
  if (currentRole !== "manager") return;
  const input = document.getElementById("new-category-input");
  const value = input.value.trim();
  if (!value) return;
  if (!categories.some(c => c.toLowerCase() === value.toLowerCase())) {
    categories.push(value);
    saveCategories();
  }
  input.value = "";
});

document.getElementById("customer-search-btn").addEventListener("click", () => {
  renderResults("customer-results", document.getElementById("customer-search").value);
});

document.getElementById("customer-search").addEventListener("input", e => {
  renderResults("customer-results", e.target.value);
});

document.getElementById("dashboard-search-btn").addEventListener("click", () => {
  renderResults("dashboard-results", document.getElementById("dashboard-search").value);
});

document.getElementById("dashboard-search").addEventListener("input", e => {
  renderResults("dashboard-results", e.target.value);
});

document.getElementById("close-profile").addEventListener("click", () => {
  document.getElementById("profile-panel").classList.add("hidden");
  activeCustomerId = null;
});

document.getElementById("save-note-btn").addEventListener("click", () => {
  const noteText = document.getElementById("new-note").value.trim();
  if (!noteText || activeCustomerId === null) return;

  const customer = customers.find(c => c.id === activeCustomerId);
  const now = new Date();
  customer.notes.push({
    text: noteText,
    by: "Michael Thuku",
    at: now.toLocaleString("en-AU")
  });

  document.getElementById("new-note").value = "";
  saveCustomers();
  showCustomerProfile(activeCustomerId);
});

const modal = document.getElementById("add-customer-modal");

function closeModal() {
  modal.classList.add("hidden");
}

document.getElementById("add-customer-btn").addEventListener("click", () => modal.classList.remove("hidden"));
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("cancel-add-customer").addEventListener("click", closeModal);

document.getElementById("save-customer").addEventListener("click", () => {
  const name = document.getElementById("new-name").value.trim();
  const phone = document.getElementById("new-phone").value.trim();
  if (!name || !phone) {
    alert("Please enter the customer name and phone number.");
    return;
  }

  const newCustomer = {
    id: Math.max(...customers.map(c => c.id), 1000) + 1,
    fullName: name,
    phone,
    email: document.getElementById("new-email").value.trim(),
    dob: document.getElementById("new-dob").value,
    preferences: [],
    visits: [],
    notes: []
  };

  customers.push(newCustomer);
  saveCustomers();

  ["new-name", "new-phone", "new-email", "new-dob"].forEach(id => {
    document.getElementById(id).value = "";
  });

  closeModal();
  renderResults("customer-results", "");
  showCustomerProfile(newCustomer.id);
});

updateDashboardStats();
updateManagerStats();
renderManagerCategories();
renderResults("customer-results", "");
renderResults("dashboard-results", "");
applyRole();
