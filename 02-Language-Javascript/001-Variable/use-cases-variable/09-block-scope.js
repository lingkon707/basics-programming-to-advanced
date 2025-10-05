if (true) {
  let blockVar = "Block Scoped";
  const blockConst = 100;
  var blockVarOld = "Function Scoped";
}
console.log(blockVarOld); // ✅ accessible
// console.log(blockVar); ❌ Error
// console.log(blockConst); ❌ Error
