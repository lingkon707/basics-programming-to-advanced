// Example: RangeError
try {
  let arr = new Array(-5); // invalid array length
} catch (err) {
  console.log(err.name, ":", err.message);
}
