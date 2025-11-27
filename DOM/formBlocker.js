document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    message.innerHTML = "";

    if (name.value.trim() === "") {
      message.innerHTML += "Name required<br>";
      valid = false;
    }
    if (!email.value.includes("@")) {
      message.innerHTML += "Valid email required<br>";
      valid = false;
    }
    if (password.value.length < 6) {
      message.innerHTML += "Password must be at least 6 chars<br>";
      valid = false;
    }

    if (valid) {
      message.innerHTML = "Form Submitted Successfully";
    }
  });
});
