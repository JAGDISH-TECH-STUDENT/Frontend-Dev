function validateBooking(name, email, seats) {
  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  const seatsRegex = /^[1-9]$|^10$/;

  if (!nameRegex.test(name)) return "Invalid Name";
  if (!emailRegex.test(email)) return "Invalid Email";
  if (!seatsRegex.test(seats)) return "Seats must be between 1-10";

  const booking = { name, email, seats };
  console.log("Ticket booked:", booking);
  return booking;
}

validateBooking("Alice", "alice@mail.com", 3);
