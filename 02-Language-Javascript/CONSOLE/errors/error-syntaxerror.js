// Example: SyntaxError
try {
  eval("console.log('Hello"); // missing closing quote
} catch (err) {
  console.log(err.name, ":", err.message);
}
