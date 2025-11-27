document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const rows = document.querySelectorAll("table tbody tr");
  const noResult = document.getElementById("noResult");

  searchBox.addEventListener("input", () => {
    let query = searchBox.value.toLowerCase();
    let found = false;
    rows.forEach(row => {
      if (row.textContent.toLowerCase().includes(query)) {
        row.style.display = "";
        found = true;
      } else {
        row.style.display = "none";
      }
    });
    noResult.style.display = found ? "none" : "block";
  });
});
