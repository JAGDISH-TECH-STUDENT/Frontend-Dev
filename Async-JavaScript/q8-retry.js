function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject(new Error("Random failure")) : resolve("Order submitted");
    }, 700);
  });
}

async function processOrder(maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder();
      console.log(`Attempt ${attempt}: Success -> ${res}`);
      return res;
    } catch (err) {
      console.warn(`Attempt ${attempt}: Failed -> ${err.message}`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

(async function run() {
  try {
    await processOrder();
    console.log("Final status: Order processed.");
  } catch (err) {
    console.error("Final status:", err.message);
  }
})();
