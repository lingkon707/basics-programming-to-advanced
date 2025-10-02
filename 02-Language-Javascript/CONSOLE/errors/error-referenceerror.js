// Example: ReferenceError
try {
  console.log(nonExistentVar);
} catch (err) {
  console.log(err.name, ":", err.message);
}
