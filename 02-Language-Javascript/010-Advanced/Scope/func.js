function showChildren() {
  var child1 = "Ali";
  var child2 = "Sara";
  console.log("Inside function:", child1, child2); // ✅ Works here
}

showChildren();

// console.log(child1); // ❌ ReferenceError
// console.log(child2); // ❌ ReferenceError
