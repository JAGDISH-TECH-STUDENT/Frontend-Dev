// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variable
  let salary = 40000;

  // Add bonus only if employee is permanent
  if (isPermanent) {
    salary += bonus;
  }

  console.log(`Total Salary: ${salary}`);
}

// Testing with different values
calculateSalary(true);   // Salary includes bonus
calculateSalary(false);  // Salary without bonus

// Demonstrating global scope remains unchanged
console.log(`Global Bonus: ${bonus}`);
