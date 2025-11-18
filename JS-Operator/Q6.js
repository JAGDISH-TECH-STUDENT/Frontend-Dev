// Counter variable
let count = 0;

// Function to increment count
function increment() {
  count++;
  console.log(`Count after increment: ${count}`);

  // Nested function to demonstrate scope
  function nestedLog() {
    console.log(`Nested scope count: ${count}`);
  }
  nestedLog();
}

// Function to decrement count
function decrement() {
  count--;
  console.log(`Count after decrement: ${count}`);
}

// Simulating clicks
increment();