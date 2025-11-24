console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

console.log("End");
