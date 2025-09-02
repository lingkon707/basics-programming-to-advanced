// Example 1: Using ||
let orderQuantity = 0;
let quantity = orderQuantity || 5; // 0 is falsy, so || takes the right value
console.log(quantity);
// Problem: Even though the order quantity is 0 (valid), || overrides it with 5.


// Example 2: Using ??
let orderQuantity2 = 0;
let quantity2 = orderQuantity2 ?? 5; // 0 is NOT null/undefined, so ?? keeps it
console.log(quantity2);
// Correct: ?? only replaces null or undefined, so 0 is preserved.