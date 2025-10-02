// Example: throw custom error
function checkAge(age) {
  if (age < 18) throw "Age must be 18+";
  return "Access granted";
}
try {
  console.log(checkAge(16));
} catch (err) {
  console.log("Error:", err);
}
