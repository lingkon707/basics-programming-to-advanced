// Example: Multiple catch blocks simulation
function test(val) {
  if (typeof val !== "number") throw new TypeError("Not a number");
  if (val < 0) throw new RangeError("Negative value");
  return val;
}
try {
  test(-5);
} catch (err) {
  console.log(err.name, ":", err.message);
}
