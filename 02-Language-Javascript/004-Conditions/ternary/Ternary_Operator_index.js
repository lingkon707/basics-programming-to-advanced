let age = 20;
const status = age >= 18 ? "Adult" : "Minor";

// Display result on the page
document.getElementById("status").textContent = `Status: ${status}`;

// Example 2: Check even or odd number
let number = 7;
const type = number % 2 === 0 ? "Even" : "Odd";
console.log(`Number ${number} is ${type}`);

// Example 3: Nested ternary for grades
let marks = 75;
const grade =
  marks >= 90
    ? "A+"
    : marks >= 80
    ? "A"
    : marks >= 70
    ? "B"
    : marks >= 60
    ? "C"
    : "F";
console.log(`Marks: ${marks}, Grade: ${grade}`);

// Example 4: Default value assignment
let username = "";
const message = username ? `Welcome, ${username}` : "Please enter your name";
console.log(message);
