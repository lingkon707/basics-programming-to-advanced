// Example: Nested callbacks
function first(cb) {
  console.log("First");
  cb();
}
function second() {
  console.log("Second");
}
first(second);
