// prototypeChain.js
function Person(name) {
  this.name = name;
}
Person.prototype.showName = function() {
  console.log(`Name: ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function() {
  console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function() {
  console.log(`Subject: ${this.subject}`);
};

const prof = new Professor("Dr. Jagdish", "CS Dept", "JavaScript");
prof.showName();
prof.showDepartment();
prof.showSubject();
