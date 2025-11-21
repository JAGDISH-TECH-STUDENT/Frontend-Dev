

function pyramid(rows = 4) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}
pyramid(4);
//Replace let with var and observe the difference in behavior like scope and hoisting.
console.log("---------------")
function pyramidVar(rows = 4) {
  for (var i = 1; i <= rows; i++) {
    var line = ""; // var is function-scoped; reused across iterations
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}
pyramidVar(4);

// Outer loop limit via user input (default = 5)

function pyramidInput(limit = 5) {
  const rows = Number(limit) || 5;
  for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}
// Example: pyramidInput(prompt("Enter rows") ?? 5);
pyramidInput(5);

