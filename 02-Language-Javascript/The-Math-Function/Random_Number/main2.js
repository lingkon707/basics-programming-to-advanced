// Using Math.random() in 5 more ways

// 1. Random boolean (true/false)
const randomBool = Math.random() < 0.5;

// 2. Random number between -10 and 10
const randomNegativePositive = Math.random() * 20 - 10;

// 3. Random integer between 1 and 100
const randomInt1to100 = Math.floor(Math.random() * 100) + 1;

// 4. Random choice from an array
const colors = ["red", "green", "blue", "yellow"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// 5. Random decimal with 2 decimal places between 0 and 1
const randomDecimal2 = Math.round(Math.random() * 100) / 100;

// Display results
console.log("Random boolean:", randomBool);
console.log("Random number (-10 to 10):", randomNegativePositive);
console.log("Random integer (1-100):", randomInt1to100);
console.log("Random color from array:", randomColor);
console.log("Random decimal (0-1) with 2 decimals:", randomDecimal2);
