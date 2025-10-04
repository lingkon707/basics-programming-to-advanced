// Flatten nested arrays
let nested = [1, [2, 3], [4, [5, 6]]];
let flat = nested.flat(2);
console.log(flat); // [1, 2, 3, 4, 5, 6]
