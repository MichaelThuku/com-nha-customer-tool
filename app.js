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

let customers = JSON.parse(localStorage.getItem("comNhaCustomers")) || seedCustomers;
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

function matches(customer, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [
    customer.fullName,
    customer.phone,
    customer.email
  ].some(value => (value || "").toLowerCase().includes(q));
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
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  document.getElementById(`${viewName}-view`).classList.add("active-view");

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  const titles = {
    dashboard: "Dashboard",
    customers: "Customers",
    about: "Prototype Notes"
  };
  document.getElementById("page-title").textContent = titles[viewName];
}

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => switchView(item.dataset.view));
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
  if (!name) {
    alert("Please enter a customer name.");
    return;
  }

  const newCustomer = {
    id: Math.max(...customers.map(c => c.id), 1000) + 1,
    fullName: name,
    phone: document.getElementById("new-phone").value.trim(),
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
renderResults("customer-results", "");
renderResults("dashboard-results", "");
