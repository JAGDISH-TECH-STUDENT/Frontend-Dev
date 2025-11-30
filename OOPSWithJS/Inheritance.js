class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    work() {
        return `${this.name} works in ${this.department}`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the ${this.department} department`;
    }
}

const e1 = new Employee("Ramesh", "HR");
const m1 = new Manager("Suresh", "IT");

console.log(e1.work());
console.log(m1.work());
