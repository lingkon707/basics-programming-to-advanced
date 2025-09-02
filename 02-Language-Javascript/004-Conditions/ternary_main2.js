

const age = 18;

// 1. Simple condition: check if adult
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// 2. Check if number is positive, negative, or zero
const number = -5;
const sign = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log("Number sign:", sign);

// 3. Check if a person can vote
const canVote = age >= 18 && age <= 100 ? "Can vote" : "Cannot vote";
console.log("Voting eligibility:", canVote);

// 4. Check if number is even or odd
const num = 7;
const evenOdd = num % 2 === 0 ? "Even" : "Odd";
console.log("Even or Odd:", evenOdd);

// 5. Combine conditions: check if a student passed and is above 18
const marks = 75;
const passed = marks >= 33 && age >= 18 ? "Passed" : "Failed";
console.log("Result:", passed);
