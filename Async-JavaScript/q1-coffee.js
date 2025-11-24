const randomDelay = () => 1000 + Math.floor(Math.random() * 1000);
const maybeFail = () => Math.random() < 0.3;

function boilWater() {
  return new Promise((resolve, reject) => {
    console.log("Boiling water...");
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Kettle error"));
      console.log("Water boiled.");
      resolve("hot water");
    }, randomDelay());
  });
}

function brewCoffee(hotWater) {
  return new Promise((resolve, reject) => {
    console.log("Brewing coffee with:", hotWater);
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Beans clogged"));
      console.log("Coffee brewed.");
      resolve("fresh coffee");
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    console.log("Pouring into cup:", coffee);
    setTimeout(() => {
      if (maybeFail()) return reject(new Error("Cup slipped"));
      console.log("Coffee poured.");
      resolve("Coffee ready for the team!");
    }, randomDelay());
  });
}

boilWater()
  .then(brewCoffee)
  .then(pourIntoCup)
  .then((finalMsg) => console.log(finalMsg))
  .catch((err) => console.error("Process failed:", err.message));
