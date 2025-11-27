document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box");
  const coords = document.getElementById("coords");

  box.addEventListener("mousemove", (e) => {
    coords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
  });

  box.addEventListener("dblclick", (e) => {
    const dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.width = "5px";
    dot.style.height = "5px";
    dot.style.background = "red";
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    document.body.appendChild(dot);
  });
});
