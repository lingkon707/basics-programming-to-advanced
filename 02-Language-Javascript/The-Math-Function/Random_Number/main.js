// Using Math.random() in 5 different ways

// 1. Simple random number between 0 and 1
const random1 = Math.random();

// 2. Random number between 0 and 10
const random2 = Math.random() * 10;

// 3. Random integer between 0 and 10
const random3 = Math.floor(Math.random() * 11);

// 4. Random number between 50 and 100
const random4 = Math.random() * (100 - 50) + 50;

// 5. Random integer between 50 and 100
const random5 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

// Display results
console.log("Random number (0-1):", random1);
console.log("Random number (0-10):", random2);
console.log("Random integer (0-10):", random3);
console.log("Random number (50-100):", random4);
console.log("Random integer (50-100):", random5);
