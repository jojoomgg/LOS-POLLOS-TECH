const ACCESS_CODE = "lospollostech.web.cr.rq";

// UTENTE PREDEFINITO
let users = JSON.parse(localStorage.getItem("users")) || [
    {
        username: "gustavo.fring.hsnbrg1010",
        password: "lospollos+T-"
    }
];

// ELEMENTI
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// SWITCH TAB
loginTab.onclick = () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
};

registerTab.onclick = () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
};

// LOGIN
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = loginUser.value;
    const p = loginPass.value;

    const found = users.find(x => x.username === u && x.password === p);

    if (found) {
        localStorage.setItem("loggedUser", u);
        alert("Accesso riuscito!");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").textContent = "Credenziali errate";
    }
});

// REGISTER
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = regUser.value;
    const p = regPass.value;
    const code = regCode.value;

    if (code !== ACCESS_CODE) {
        document.getElementById("regMsg").textContent = "Codice accesso errato";
        return;
    }

    if (users.some(x => x.username === u)) {
        document.getElementById("regMsg").textContent = "Username già esistente";
        return;
    }

    users.push({ username: u, password: p });
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("regMsg").textContent = "Account creato!";
});
