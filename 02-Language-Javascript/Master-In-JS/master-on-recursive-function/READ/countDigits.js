function countDigits(num) {
  if (num === 0) return 0; // base case
  return 1 + countDigits(Math.floor(num / 10));
}

console.log(countDigits(12345)); 
// Output: 5
