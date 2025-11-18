// Feedback string
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let wordCount = feedback.split(" ").length;

// Check positivity
if (feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor")) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}

console.log(`Word Count: ${wordCount}`);
