// Infinite loop example (must break manually)
let count = 1;
do {
  console.log(count);
  count++;
  if (count > 5) break;
} while (true);
// Output: 1 2 3 4 5
