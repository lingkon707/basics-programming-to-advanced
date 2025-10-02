// Example: TypeError
try {
  let num = 5;
  num.toUpperCase(); // TypeError: num.toUpperCase is not a function
} catch (err) {
  console.log(err.name, ":", err.message);
}
