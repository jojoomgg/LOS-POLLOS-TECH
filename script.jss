const ACCESS_CODE = "lospollostech.web.cr.rq";

// UTENTE GIA' REGISTRATO
let users = [
    {
        username: "gustavo.fring.hsnbrg1010",
        password: "lospollos+T-"
    }
];

// ELEMENTI
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// SWITCH TAB
tabLogin.onclick = () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    tabLogin.classList.add("active");
    tabRegister.classList.remove("active");
};

tabRegister.onclick = () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    tabRegister.classList.add("active");
    tabLogin.classList.remove("active");
};

// LOGIN
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const user = users.find(u =>
        u.username === username && u.password === password
    );

    if (user) {
        alert("Accesso riuscito!");
        localStorage.setItem("user", username);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").innerText = "❌ Login errato";
    }
});

// REGISTER
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;
    const code = document.getElementById("regCode").value;

    const msg = document.getElementById("registerMsg");

    if (code !== ACCESS_CODE) {
        msg.innerText = "❌ Codice accesso sbagliato";
        return;
    }

    if (users.find(u => u.username === username)) {
        msg.innerText = "❌ Username già esistente";
        return;
    }

    users.push({ username, password });

    msg.innerText = "✅ Account creato!";
});
