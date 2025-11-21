let user = { name: "John", email: "john@mail.com", age: 21 };

function renderForm() {
  const container = document.getElementById("formContainer");
  container.innerHTML = `
    <form id="userForm">
      <input type="text" name="name" value="${user.name}" />
      <input type="email" name="email" value="${user.email}" />
      <input type="number" name="age" value="${user.age}" />
      <button type="submit">Update</button>
    </form>
    <div id="userDetails"></div>
  `;

  document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault();
    user.name = e.target.name.value;
    user.email = e.target.email.value;
    user.age = e.target.age.value;
    displayUser();
  });
}

function displayUser() {
  document.getElementById("userDetails").innerText = JSON.stringify(user, null, 2);
}

renderForm();
