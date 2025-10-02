// Example: Intersection of two Sets
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Set {2,3}
