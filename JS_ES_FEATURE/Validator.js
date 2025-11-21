
class NegativeAmountError extends Error {
  constructor(message, tx) {
    super(message);
    this.name = "NegativeAmountError";
    this.tx = tx;
  }
}
class MissingFieldError extends Error {
  constructor(message, tx) {
    super(message);
    this.name = "MissingFieldError";
    this.tx = tx;
  }
}
class NullEntryError extends Error {
  constructor(message) {
    super(message);
    this.name = "NullEntryError";
  }
}


const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];


const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  // Debug tip: set a breakpoint here and watch { i, transactions[i], valid, invalid }
  const tx = transactions[i];
  try {
    if (tx === null) {
      throw new NullEntryError(`Entry at index ${i} is null`);
    }
    if (typeof tx.id !== "number" || typeof tx.amount !== "number") {
      throw new MissingFieldError(`Missing id or amount at index ${i}`, tx);
    }
    if (tx.amount < 0) {
      throw new NegativeAmountError(`Negative amount at index ${i}`, tx);
    }
    valid.push(tx);
  } catch (err) {
    invalid.push({ index: i, error: err.name, message: err.message, tx });
  }
}


console.log("Transaction Validation Report");
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
console.log("Valid:", valid);
console.log("Invalid:", invalid);
