let x = 16.75;

let rounded = Math.round(x);
let sqrt = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`
Math Dashboard:
Rounded: ${rounded}
Square Root: ${sqrt}
Power (x^3): ${power}
Random (10–50): ${randomNum}
`);
