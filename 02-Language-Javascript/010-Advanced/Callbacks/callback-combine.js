// Example: Combining multiple callbacks
function step1(next) {
  console.log("Step 1");
  next();
}
function step2(next) {
  console.log("Step 2");
  next();
}
function step3() {
  console.log("Step 3");
}
step1(() => step2(step3));
