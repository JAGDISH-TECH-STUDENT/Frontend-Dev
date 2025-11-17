// Q7: Smart Guessing Game
let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 23; // test value

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
  console.log("Very close!");
} else if (userGuess > secretNumber) {
  console.log("Too high");
} else {
  console.log("Too low");
}
