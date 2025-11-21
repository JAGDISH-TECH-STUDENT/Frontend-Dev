
function Person(name) {
  this.name = name;
}

Person.prototype.showName = function() {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // Inherit properties
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
  console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Jagdish", "Computer Science");
student1.showName();
student1.showBranch();
