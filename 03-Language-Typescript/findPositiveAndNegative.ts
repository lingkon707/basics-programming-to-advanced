

function findPositiveAndNegative(start: number, end: number): { positives: number[], negatives: number[] } {
  let positives: number[] = [];
  let negatives: number[] = [];

  for (let i = start; i <= end; i++) {
    if (i >= 0) {
      positives.push(i);
    } else {
      negatives.push(i);
    }
  }

  return { positives, negatives };
}

// Example: range from -50 to 99
const { positives, negatives } = findPositiveAndNegative(-50, 99);

console.log("Positive numbers:", positives);
console.log("Negative numbers:", negatives);
