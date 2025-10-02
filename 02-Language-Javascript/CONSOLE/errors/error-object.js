// Example: Error object properties
try {
  throw new Error("Custom error message");
} catch (err) {
  console.log("Name:", err.name);
  console.log("Message:", err.message);
  console.log("Stack:", err.stack);
}
