class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    calculateAverage() {
        let sum = this.marks.reduce((acc, val) => acc + val, 0);
        return sum / this.marks.length;
    }
    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        else if (avg >= 75) return "B";
        else if (avg >= 50) return "C";
        else return "F";
    }
}

const s1 = new Student("Ravi", [95, 88, 92]);
const s2 = new Student("Meena", [70, 65, 80]);
const s3 = new Student("Amit", [40, 45, 50]);

console.log(`${s1.name} - Avg: ${s1.calculateAverage()} Grade: ${s1.getGrade()}`);
console.log(`${s2.name} - Avg: ${s2.calculateAverage()} Grade: ${s2.getGrade()}`);
console.log(`${s3.name} - Avg: ${s3.calculateAverage()} Grade: ${s3.getGrade()}`);
