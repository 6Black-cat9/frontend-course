const form = document.querySelector("#auth-form");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const message = document.querySelector("#auth-message");
const passwordButton = document.querySelector("#password-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const login = loginInput.value.trim();
  const password = passwordInput.value;

  if (!login || !password) {
    message.textContent = "Введите логин и пароль.";
    return;
  }

  if (login === "admin" && password === "24526") {
    window.location.href = "./index.html";
    return;
  }

  message.textContent = "Неверный логин или пароль.";
});
passwordButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
