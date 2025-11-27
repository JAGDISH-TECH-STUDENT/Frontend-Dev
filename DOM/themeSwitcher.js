document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".theme-btn");
  const body = document.body;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      body.setAttribute("data-theme", theme);
      body.className = theme;
    });
  });
});
