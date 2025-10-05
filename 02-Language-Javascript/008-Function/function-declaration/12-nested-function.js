function outer() {
  function inner() {
    console.log("Inner Function Inside Outer!");
  }
  inner();
}
outer();
