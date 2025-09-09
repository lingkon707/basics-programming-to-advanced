function printNumbers(n) {
  if (n === 0) return; // base case
  printNumbers(n - 1); 
  console.log(n); // prints after recursion → 1,2,3,...
}

printNumbers(5);
// Output: 1, 2, 3, 4, 5
