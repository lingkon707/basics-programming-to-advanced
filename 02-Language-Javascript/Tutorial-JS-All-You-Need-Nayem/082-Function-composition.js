 // ChatGPT : Functions to compose
function add2(x) {
  return x + 2;
}

function multiply3(x) {
  return x * 3;
}

function square(x) {
  return x * x;
}

// Function composition
const composedFunction = (x) => square(multiply3(add2(x)));

// Usage
const result = composedFunction(3);
console.log(result); // Output: 121


/*
Function composition is the process ofcombining 
two or more functions to produce a new function. 
*/

// Functions to compose
const double = (x) => x * 2;
const increment = (x) => x + 1;

// Function composition
const composedFunction2 = (x) => increment(double(x));

// Usage
const result2 = composedFunction2(5);
console.log(result2); // Output: 11
