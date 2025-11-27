document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  images.forEach(img => {
    img.addEventListener("click", (e) => {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      e.stopPropagation();
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalImg.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
