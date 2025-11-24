function getBugs() {
  return new Promise((resolve, reject) => {
    console.log("Fetching bugs...");
    setTimeout(() => {
      const fail = Math.random() < 0.4;
      if (fail) return reject(new Error("Bug API unreachable"));
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch((err) => {
    console.error("Failed to fetch bugs:", err.message);
  });
