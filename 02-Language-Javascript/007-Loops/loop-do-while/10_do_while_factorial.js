// Calculate factorial using do...while
let n = 5;
let factorial = 1;
do {
  factorial *= n;
  n--;
} while (n > 0);
console.log("Factorial:", factorial); // 120
