// Example: EvalError
try {
  throw new EvalError("This is an EvalError example");
} catch (err) {
  console.log(err.name, ":", err.message);
}
