// Q10: Citizen Eligibility Validator
let age = 19;
let isCitizen = true;

if (isCitizen && age >= 18) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else {
    console.log("Eligible to vote only.");
  }
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}
