// sumNumbers.js
function sum(n) {
    if (n <= 0) return 0; // base case must return 0 for calculation
    return n + sum(n - 1);
}

console.log(sum(5));
