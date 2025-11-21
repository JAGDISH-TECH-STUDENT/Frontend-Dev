class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * percent / 100;
  }
}

const employees = [
  new Employee(1, "John", "IT", 50000),
  new Employee(2, "Jane", "HR", 40000),
  new Employee(3, "Alex", "Finance", 60000),
  new Employee(4, "Sam", "Marketing", 45000),
  new Employee(5, "Sara", "Sales", 55000)
];

// Calculate total annual payout
const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout:", totalPayout);
