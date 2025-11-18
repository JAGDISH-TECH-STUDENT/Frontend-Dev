
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

for (let [dept, score] of departments) {
  if (score >= 90) {
    console.log(`${dept}: Excellent`);
  } else if (score >= 75) {
    console.log(`${dept}: Good`);
  } else if (score >= 60) {
    console.log(`${dept}: Average`);
  } else {
    console.log(`${dept}: Needs Improvement`);
  }
}
