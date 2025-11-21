
function greetUser(name, callback) {
  console.log(`Hello ${name}`); // Prints greeting
  callback(); // Executes the callback function
}

function showEndMessage() {
  console.log("Welcome to the course!");
}


greetUser("Jagdish", showEndMessage);
