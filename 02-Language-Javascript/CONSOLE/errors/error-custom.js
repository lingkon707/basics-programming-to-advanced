// Example: Custom Error class
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}
try {
  throw new MyError("Something went wrong!");
} catch (err) {
  console.log(err.name, ":", err.message);
}
