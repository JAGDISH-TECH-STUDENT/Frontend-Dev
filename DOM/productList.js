document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("productInput");
  const addBtn = document.getElementById("addBtn");
  const productList = document.getElementById("productList");

  addBtn.addEventListener("click", () => {
    if (inputBox.value.trim() !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="product-name">${inputBox.value}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      productList.appendChild(li);
      inputBox.value = "";
    }
  });

  productList.addEventListener("click", (e) => {
    const target = e.target;
    const li = target.closest("li");

    if (target.classList.contains("delete")) {
      li.remove();
    }

    if (target.classList.contains("edit")) {
      const span = li.querySelector(".product-name");
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      input.focus();
      input.addEventListener("blur", () => {
        const newSpan = document.createElement("span");
        newSpan.className = "product-name";
        newSpan.textContent = input.value;
        li.insertBefore(newSpan, input);
        li.removeChild(input);
      });
    }
  });
});
