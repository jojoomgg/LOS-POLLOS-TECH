const ACCESS_CODE = "lospollostech.web.cr.rq";

let users = [
    {
        username: "gustavo.fring.hsnbrg1010",
        password: "lospollos+T-"
    }
];

// ELEMENTI
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// 🔥 SWITCH SICURO (ORA FUNZIONA SEMPRE)
loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";

    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

// LOGIN
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = document.getElementById("loginUser").value;
    const p = document.getElementById("loginPass").value;

    const ok = users.find(x => x.username === u && x.password === p);

    if (ok) {
        localStorage.setItem("user", u);
        alert("Login OK");
    } else {
        document.getElementById("loginMsg").innerText = "❌ errore login";
    }
});

// REGISTER
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const u = document.getElementById("regUser").value;
    const p = document.getElementById("regPass").value;
    const c = document.getElementById("regCode").value;

    if (c !== ACCESS_CODE) {
        document.getElementById("regMsg").innerText = "❌ codice errato";
        return;
    }

    if (users.find(x => x.username === u)) {
        document.getElementById("regMsg").innerText = "❌ già esistente";
        return;
    }

    users.push({ username: u, password: p });

    document.getElementById("regMsg").innerText = "✅ creato!";
});
