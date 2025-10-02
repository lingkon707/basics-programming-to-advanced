// Example: Accessing null property
try {
  let x = null;
  console.log(x.prop); // TypeError
} catch (err) {
  console.log(err.name, ":", err.message);
}
