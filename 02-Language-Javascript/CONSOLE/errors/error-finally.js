// Example: finally block
try {
  console.log("Trying...");
  throw new Error("Oops!");
} catch (err) {
  console.log("Caught:", err.message);
} finally {
  console.log("Finally block always runs");
}
