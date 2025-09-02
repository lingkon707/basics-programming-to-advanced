// main.js

// Example 1: Simple check
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
console.log(canVote); // Output: Yes, can vote

// Example 2: Checking if a number is even or odd
let number = 7;
let type = (number % 2 === 0) ? "Even" : "Odd";
console.log(type); // Output: Odd

// Example 3: Find the maximum of two numbers
let a = 12, b = 20;
let max = (a > b) ? a : b;
console.log("Maximum:", max); // Output: Maximum: 20

// Example 4: Nested ternary operator
let marks = 85;
let grade = (marks >= 90) ? "A+" :
            (marks >= 80) ? "A" :
            (marks >= 70) ? "B" :
            (marks >= 60) ? "C" : "F";
console.log("Grade:", grade); // Output: Grade: A

// Example 5: Checking if a string is empty
let username = "";
let message = (username) ? `Welcome, ${username}` : "Please enter your name";
console.log(message); // Output: Please enter your name

// Example 6: Short conditional for assigning default value
let input;
let result = input ? input : "Default Value";
console.log(result); // Output: Default Value

// Example 7: Using ternary in a function return
function checkTemperature(temp) {
    return (temp > 30) ? "Hot" : "Cold";
}
console.log(checkTemperature(35)); // Output: Hot
console.log(checkTemperature(20)); // Output: Cold
