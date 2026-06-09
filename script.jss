// LOGIN UNICO
const ADMIN_USER = "gustavo.fring.hsnbrg1010";
const ADMIN_PASS = "gusfring.ofc.admn+1010";

// UTENTI (sessione)
let users = JSON.parse(sessionStorage.getItem("users")) || [];

// SAVE
function save() {
sessionStorage.setItem("users", JSON.stringify(users));
}

// ELEMENTI
const loginBox = document.getElementById("loginBox");
const dashboard = document.getElementById("dashboard");

// LOGIN
loginForm.addEventListener("submit", e => {
e.preventDefault();

const u = user.value;
const p = pass.value;

if (u === ADMIN_USER && p === ADMIN_PASS) {
loginBox.classList.add("hidden");
dashboard.classList.remove("hidden");

welcome.innerText = "Benvenuto Admin " + u;
} else {
msg.innerText = "❌ Accesso negato";
}
});

// LOGOUT
function logout() {
location.reload();
}

// 👥 MOSTRA UTENTI
function showUsers() {
let html = "<h3>Utenti</h3>";

if (users.length === 0) {
html += "<p>Nessun utente creato</p>";
}

users.forEach((u, i) => {
html += `
<div>
${u.username}
<button onclick="deleteUser(${i})">❌ elimina</button>
</div>
`;
});

// CREAZIONE UTENTE
html += `
<hr>
<h3>Crea utente</h3>
<input id="newUser" placeholder="Username">
<input id="newPass" placeholder="Password">
<button onclick="createUser()">➕ crea</button>
`;

panel.innerHTML = html;
}

// ➕ CREA UTENTE
function createUser() {
const u = document.getElementById("newUser").value;
const p = document.getElementById("newPass").value;

if (!u || !p) return;

users.push({ username: u, password: p });
save();

showUsers();
}

// ❌ ELIMINA UTENTE
function deleteUser(i) {
users.splice(i, 1);
save();
showUsers();
}

// 🧩 BUILDER (placeholder)
function showBuilder() {
panel.innerHTML = `
<h3>🧩 Builder</h3>
<p>Qui aggiungeremo editor siti HTML/CSS/JS</p>
`;
}
