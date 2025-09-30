// Example 1: Let & Const
console.log("ES6 Example: Let & Const");

let name = "Alice";
const country = "Bangladesh";

console.log("Name:", name);
console.log("Country:", country);
console.log("---------------");


// Example 2: Template Literals
console.log("ES6 Example: Template Literals");

let age = 22;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

console.log("---------------");


// Example 3: Arrow Functions
console.log("ES6 Example: Arrow Functions");

const add = (a, b) => a + b;
console.log("5 + 3 =", add(5, 3));

console.log("---------------");


// Example 4: Default Parameters
console.log("ES6 Example: Default Parameters");

function greet(user = "Guest") {
  console.log(`Welcome, ${user}!`);
}
greet();
greet("Lingkon");

console.log("---------------");


// Example 5: Destructuring
console.log("ES6 Example: Destructuring");

const person = { firstName: "John", lastName: "Doe", age: 25 };
const { firstName, lastName } = person;
console.log(firstName, lastName);

console.log("---------------");


// Example 6: Spread Operator
console.log("ES6 Example: Spread Operator");

const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
console.log(moreNums);

console.log("---------------");


// Example 7: Classes
console.log("ES6 Example: Classes");

class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(`${this.type} makes a sound.`);
  }
}
const dog = new Animal("Dog");
dog.speak();

console.log("---------------");


// Example 8: Promises
console.log("ES6 Example: Promises");

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Task completed!") : reject("Task failed!");
});

myPromise.then(msg => console.log(msg))
         .catch(err => console.log(err));

console.log("---------------");