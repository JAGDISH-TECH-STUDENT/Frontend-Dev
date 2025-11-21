// applyOperation.js
function applyOperation(numbers, operation) {
  return numbers.map(operation); // Apply callback to each element
}

// Double numbers
const doubled = applyOperation([1,2,3,4], num => num * 2);
console.log("Doubled:", doubled);

// Square numbers
const squared = applyOperation([1,2,3,4], num => num * num);
console.log("Squared:", squared);
