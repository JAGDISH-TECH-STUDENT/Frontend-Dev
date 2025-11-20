const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const e = employees[i];
    if (!e || typeof e !== "object") throw new Error("Invalid employee record");
    if (!("name" in e) || !("salary" in e) || !("years" in e)) throw new Error("Missing properties");

    const salary = Number(e.salary);
    const years = Number(e.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error("Conversion error");

    const rate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * rate;

    console.log(
      `[Q2] Employee: ${e.name} | Salary: ${salary} | Years: ${years} | Rate: ${rate * 100}% | Bonus: ${bonus}`
    );
  } catch (err) {
    console.log(`[Q2] Error for index ${i}: ${err.message}`);
  }
}
