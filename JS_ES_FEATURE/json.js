const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const parsed = JSON.parse(line);
   
    if (!("user" in parsed) || !("age" in parsed)) {
      throw new Error("Missing required keys (user, age)");
    }
   
    const ageNum = Number(parsed.age);
    if (Number.isNaN(ageNum)) {
      throw new Error("Age is not a valid number");
    }
   
    if (ageNum < 18) {
      errors.push({ line: i, error: "UnderAgeFiltered", message: "User under 18", data: parsed });
      continue;
    }
    clean.push({ user: parsed.user, age: ageNum });
  } catch (err) {
    errors.push({ line: i, error: err.name || "ParseError", message: err.message, raw: line });
  }
}

console.log("Valid entries:", clean);
console.log("Errors:", errors);
console.log(`Counts => Valid: ${clean.length}, Errors: ${errors.length}`);
