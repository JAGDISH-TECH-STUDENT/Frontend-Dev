let productName = " wireless headphones PRO ";

// Step 1: Trim spaces
let cleaned = productName.trim().toLowerCase();

// Step 2: Capitalize each word
let formatted = cleaned.split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Step 3: Replace "Pro" with "Pro Edition"
formatted = formatted.replace("Pro", "Pro Edition");

// Output
console.log(`Cleaned Title: ${formatted}`);
console.log(`Length: ${formatted.length}`);
