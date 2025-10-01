function outer() {
  function inner() {
    console.log("Inside inner function");
  }
  inner();
}
outer();
