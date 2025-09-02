// Using Math.min() and Math.max() in 5 different ways

// 1. Find minimum and maximum in a set of numbers
const min1 = Math.min(5, 10, 2, 8);
const max1 = Math.max(5, 10, 2, 8);

// 2. Find min/max in an array using spread operator
const numbers = [12, 45, 7, 22, 30];
const min2 = Math.min(...numbers);
const max2 = Math.max(...numbers);

// 3. Minimum and maximum of random numbers
const randomNumbers = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
const min3 = Math.min(...randomNumbers);
const max3 = Math.max(...randomNumbers);

// 4. Compare variables
const a = 15, b = 20, c = 10;
const min4 = Math.min(a, b, c);
const max4 = Math.max(a, b, c);

// 5. Minimum/Maximum with expressions
const min5 = Math.min(2 * 3, 10 - 4, 7 + 1);
const max5 = Math.max(2 * 3, 10 - 4, 7 + 1);

// Display results
console.log("Min1:", min1, "Max1:", max1);
console.log("Min2:", min2, "Max2:", max2);
console.log("Min3:", min3, "Max3:", max3);
console.log("Min4:", min4, "Max4:", max4);
console.log("Min5:", min5, "Max5:", max5);
