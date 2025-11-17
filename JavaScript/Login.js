// Q1: Personalized Login Greeting
let userName = "Jagdish"; //User name
let currentHour = new Date().getHours(); // Current hour (0–23)

if (currentHour < 12) {
  console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
  console.log(`Good Afternoon ${userName}!`);
} else {
  console.log(`Good Evening ${userName}!`);
}
