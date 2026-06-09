const ACCESS_CODE = "lospollostech.web.cr.rq";

// UTENTE BASE (demo sempre presente)
const baseUsers = [
    {
        username: "gustavo.fring.hsnbrg1010",
        password: "lospollos+T-"
    }
];

// recupera utenti della sessione
let users = JSON.parse(sessionStorage.getItem("users")) || baseUsers;

// salva sempre nello storage sessione
function saveUsers() {
    sessionStorage.setItem("users", JSON.stringify(users));
}

// ELEMENTI
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// SWITCH TAB
loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});

registerBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

// LOGIN
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = loginUser.value;
    const p = loginPass.value;

    const found = users.find(x => x.username === u && x.password === p);

    if (found) {
        sessionStorage.setItem("loggedUser", u);
        alert("Accesso OK (sessione)");
    } else {
        document.getElementById("loginMsg").innerText = "❌ login errato";
    }
});

// REGISTER
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = regUser.value;
    const p = regPass.value;
    const c = regCode.value;

    if (c !== ACCESS_CODE) {
        document.getElementById("regMsg").innerText = "❌ codice errato";
        return;
    }

    if (users.some(x => x.username === u)) {
        document.getElementById("regMsg").innerText = "❌ username già esistente";
        return;
    }

    users.push({ username: u, password: p });
    saveUsers();

    document.getElementById("regMsg").innerText = "✅ creato (temporaneo)";
});
