function validateLogin(username, password) {
  const userRegex = /^.{5,}$/;
  const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

  if (!userRegex.test(username)) return "Username must be at least 5 characters";
  if (!passRegex.test(password)) return "Password must be 8+ chars with uppercase, lowercase, number, special char";

  return "Login Successful!";
}

console.log(validateLogin("adminUser", "Pass@123"));
