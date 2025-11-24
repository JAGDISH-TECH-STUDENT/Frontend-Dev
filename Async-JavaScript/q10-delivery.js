const delay = () => 1000 + Math.floor(Math.random() * 1000);
const failChance = 0.3;

function takeOrder() {
  return new Promise((resolve, reject) => {
    console.log("Start Pipeline");
    setTimeout(() => {
      if (Math.random() < failChance) return reject(new Error("Order not received"));
      console.log("Step 1: Order taken");
      resolve("order");
    }, delay());
  });
}

function prepare(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failChance) return reject(new Error("Kitchen delay"));
      console.log("Step 2: Food prepared");
      resolve({ order, prepared: true });
    }, delay());
  });
}

function pack(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failChance) return reject(new Error("Packaging issue"));
      console.log("Step 3: Package ready");
      resolve({ ...state, packed: true });
    }, delay());
  });
}

function dispatch(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failChance) return reject(new Error("Rider unavailable"));
      console.log("Step 4: Out for delivery");
      resolve({ ...state, dispatched: true });
    }, delay());
  });
}

function deliver(state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failChance) return reject(new Error("Customer unreachable"));
      console.log("Delivery completed!");
      resolve({ ...state, delivered: true });
    }, delay());
  });
}

async function runPipeline() {
  try {
    const order = await takeOrder();
    const prepared = await prepare(order);
    const packed = await pack(prepared);
    const dispatched = await dispatch(packed);
    const finalState = await deliver(dispatched);
    return finalState;
  } catch (err) {
    console.error("Pipeline failed!", err.message);
    throw err;
  }
}

(async function main() {
  try {
    const result = await runPipeline();
    console.log("Final state:", result);
  } catch {}
})();
