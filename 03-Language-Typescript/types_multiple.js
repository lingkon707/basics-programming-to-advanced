
type ResultType = string | number | boolean;

// Function that returns different types based on conditions
function checkNumber(n: number): ResultType {
  return (n % 5 === 0)
    ? "Divisible by 5"                // string
    : (n % 2 === 0)
      ? true                          // boolean
      : n * 2;                        // number
}

// Another type for structured data
type Data = {
  value: number;
  result: ResultType;
};

// Store all results in an array
let results: Data[] = [];

for (let i = 10; i <= 20; i++) {
  let res: ResultType = checkNumber(i);

  results.push({
    value: i,
    result: res,
  });
}

// Print all results
results.forEach(item => {
  console.log(`Value: ${item.value}, Result: ${item.result}`);
});