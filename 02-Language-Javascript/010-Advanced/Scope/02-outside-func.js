// Outside a function – var can be global, let cannot

// Inside a block
{
  var blockVar = "Uncle Var";   // function-scoped → still accessible globally here
  let blockLet = "Aunt Let";    // block-scoped → only accessible inside this block
  const blockConst = "Cousin";  // block-scoped → only inside block
}

console.log(blockVar); // ✅ Uncle Var - suceesfully
// console.log(blockLet); // ❌ ReferenceError
// console.log(blockConst); // ❌ ReferenceError


// Explanation:

// var ignores block scope and becomes global if outside a function.
// let and const are strictly block-scoped and cannot be accessed outside { }.