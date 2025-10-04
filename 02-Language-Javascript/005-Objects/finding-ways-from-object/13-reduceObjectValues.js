// Reduce object values to sum
let marks = { math: 70, english: 45, science: 85 };
let total = Object.values(marks).reduce((a, b) => a + b, 0);
console.log(total); // 200
