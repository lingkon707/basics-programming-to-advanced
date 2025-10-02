// Example: Difference of two Sets
const setX = new Set([1, 2, 3]);
const setY = new Set([2, 3, 4]);
const difference = new Set([...setX].filter(x => !setY.has(x)));
console.log(difference); // Set {1}
