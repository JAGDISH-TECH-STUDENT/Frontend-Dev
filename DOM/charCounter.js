document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("textArea");
  const counter = document.getElementById("counter");
  const resetBtn = document.getElementById("resetBtn");
  const maxChars = 100;

  textarea.addEventListener("input", (e) => {
    let remaining = maxChars - textarea.value.length;
    counter.textContent = `Remaining: ${remaining}`;
    if (remaining <= 20 && remaining > 0) {
      counter.style.color = "yellow";
    } else if (remaining <= 0) {
      counter.style.color = "red";
      e.preventDefault();
      textarea.value = textarea.value.substring(0, maxChars);
    } else {
      counter.style.color = "black";
    }
  });

  resetBtn.addEventListener("click", () => {
    textarea.value = "";
    counter.textContent = `Remaining: ${maxChars}`;
    counter.style.color = "black";
  });
});
