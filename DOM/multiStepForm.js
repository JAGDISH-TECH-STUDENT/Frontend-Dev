document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");
  const nextBtns = document.querySelectorAll(".next");
  const backBtns = document.querySelectorAll(".back");
  const summary = document.getElementById("summary");
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });
  }

  nextBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const input = steps[i].querySelector("input");
      if (input.value.trim() === "" || 
          (input.type === "email" && !input.value.includes("@")) ||
          (input.type === "password" && input.value.length < 6)) {
        alert("Invalid input!");
        return;
      }
      currentStep++;
      if (currentStep < steps.length) {
        showStep(currentStep);
      } else {
        summary.textContent = `Name: ${steps[0].querySelector("input").value}, 
                               Email: ${steps[1].querySelector("input").value}, 
                               Password: ${steps[2].querySelector("input").value}`;
      }
    });
  });

  backBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      currentStep--;
      showStep(currentStep);
    });
  });

  showStep(currentStep);
});
