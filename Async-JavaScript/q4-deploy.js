const serverA = new Promise((resolve, reject) => {
  console.log("Server A: deploying...");
  setTimeout(() => {
    if (Math.random() < 0.3) return reject(new Error("Server A failure"));
    resolve("Server A done");
  }, 2000);
});

const serverB = new Promise((resolve, reject) => {
  console.log("Server B: deploying...");
  setTimeout(() => {
    if (Math.random() < 0.3) return reject(new Error("Server B failure"));
    resolve("Server B done");
  }, 3000);
});

Promise.all([serverA, serverB])
  .then(() => console.log("Deployment completed for all servers"))
  .catch((err) => console.error("Deployment error:", err.message));

Promise.race([serverA, serverB])
  .then((msg) => console.log("Fastest response:", msg))
  .catch((err) => console.error("Race error:", err.message));
