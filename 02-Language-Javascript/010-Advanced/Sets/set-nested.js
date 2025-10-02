// Example: Nested Sets
const innerSet1 = new Set([1,2]);
const innerSet2 = new Set([3,4]);
const outerSet = new Set([innerSet1, innerSet2]);
console.log(outerSet);
