// Using continue
let j = 0;
do {
  j++;
  if (j === 3) continue; // skip 3
  console.log(j);
} while (j < 5);
// Output: 1 2 4 5
