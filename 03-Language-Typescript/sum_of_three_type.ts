type ThreeNumbers = [number, number, number];

function sumOfThree(nums: ThreeNumbers): number {
  const [a, b, c] = nums;
  return a + b + c;
}

const numbers: ThreeNumbers = [5, 10, 15];
const result = sumOfThree(numbers);

console.log(result);