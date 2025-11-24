function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() < 0.33 ? reject("Profile Failed") : resolve("Profile Loaded")), 2000);
  });
}
function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() < 0.33 ? reject("Posts Failed") : resolve("Posts Loaded")), 1500);
  });
}
function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => (Math.random() < 0.33 ? reject("Messages Failed") : resolve("Messages Loaded")), 1000);
  });
}

(async function run() {
  const start = Date.now();
  console.log("Loading dashboard modules...");

  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const end = Date.now();

  results.forEach((res, idx) => {
    const name = ["Profile", "Posts", "Messages"][idx];
    if (res.status === "fulfilled") {
      console.log(`${name}: Success -> ${res.value}`);
    } else {
      console.warn(`${name}: Failed -> ${res.reason}`);
    }
  });

  console.log(`Total time: ${end - start} ms`);
})();
