// CREDENZIALI UNICHE
const USER = "gustavo.fring.hsnbrg1010";
const PASS = "gusfring.ofc.admn+1010";

// ELEMENTI
const loginBox = document.getElementById("loginBox");
const dashboard = document.getElementById("dashboard");

const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");

const username = document.getElementById("username");
const password = document.getElementById("password");

const welcome = document.getElementById("welcome");

// LOGIN
form.addEventListener("submit", (e) => {
e.preventDefault();

const u = username.value;
const p = password.value;

if (u === USER && p === PASS) {

loginBox.classList.add("hidden");
dashboard.classList.remove("hidden");

welcome.innerText = "Benvenuto " + u;

} else {
msg.innerText = "❌ username o password sbagliati";
}
});

// LOGOUT
function logout() {
location.reload();
}
