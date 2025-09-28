

function findNumbersInRange(start: number, end: number): number[] {
  let result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}


const numbers = findNumbersInRange(50, 99);
console.log("Numbers between 50 and 99:", numbers);
