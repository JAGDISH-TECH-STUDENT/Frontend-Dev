// Generate 8 random scores between 30–100
let scores = Array.from({length: 8}, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, val) => sum + val, 0) / scores.length;
let passedCount = scores.filter(score => score >= 50).length;

console.log(`
Scores: ${scores}
Highest: ${highest}
Lowest: ${lowest}
Average: ${average.toFixed(2)}
Passed Students: ${passedCount}
`);
