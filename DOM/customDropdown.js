document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("dropdownBtn");
  const options = document.getElementById("options");

  button.addEventListener("click", () => {
    options.style.display = options.style.display === "block" ? "none" : "block";
  });

  options.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV") {
      button.textContent = e.target.textContent;
      options.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!button.contains(e.target) && !options.contains(e.target)) {
      options.style.display = "none";
    }
  }, true);
});
