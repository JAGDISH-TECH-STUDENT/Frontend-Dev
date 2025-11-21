class DivideByZeroError extends Error {
  constructor() { super("Cannot divide by zero"); this.name = "DivideByZeroError"; }
}
class NegativeRootError extends Error {
  constructor() { super("Cannot take square root of a negative number"); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
  constructor(op) { super(`Invalid operation: ${op}`); this.name = "InvalidOperationError"; }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(op, a, b) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError();
      return a / b;
    case "power": return a ** b;
    case "root":
      if (a < 0) throw new NegativeRootError();
      return Math.sqrt(a);
    default: throw new InvalidOperationError(op);
  }
}

function runAll() {
  const results = [];
  for (const op of operations) {
    try {
      const value = calculate(op, num1, num2);
      results.push({ op, status: "success", value });
    } catch (err) {
      results.push({ op, status: "error", error: err.name, message: err.message });
    }
  }
  console.log("Smart Calculator Summary:");
  for (const r of results) {
    if (r.status === "success") {
      console.log(`${r.op}: ${r.value}`);
    } else {
      console.log(`${r.op}: [${r.error}] ${r.message}`);
    }
  }
  console.log(`Success: ${results.filter(r => r.status === "success").length}, Errors: ${results.filter(r => r.status === "error").length}`);
}

runAll();
