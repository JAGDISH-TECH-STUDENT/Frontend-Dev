
function validateForm(name, email, phone, password) {
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

  return {
    name: nameRegex.test(name),
    email: emailRegex.test(email),
    phone: phoneRegex.test(phone),
    password: passwordRegex.test(password)
  };
}


console.log(validateForm("John", "john@example.com", "9876543210", "Pass@123"));
