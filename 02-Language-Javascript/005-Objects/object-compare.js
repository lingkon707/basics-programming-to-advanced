// Example: Compare two objects
function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(isEqual({ a: 1 }, { a: 2 })); // false
