// Using Math.min() and Math.max() in 5 more ways

// 1. Find min/max of negative and positive numbers
const min1 = Math.min(-5, 10, -20, 8);
const max1 = Math.max(-5, 10, -20, 8);

// 2. Find min/max with decimal numbers
const min2 = Math.min(3.5, 7.2, 1.8, 4.9);
const max2 = Math.max(3.5, 7.2, 1.8, 4.9);

// 3. Min/max from random integers
const randInt1 = Math.floor(Math.random() * 50);
const randInt2 = Math.floor(Math.random() * 50);
const randInt3 = Math.floor(Math.random() * 50);
const min3 = Math.min(randInt1, randInt2, randInt3);
const max3 = Math.max(randInt1, randInt2, randInt3);

// 4. Min/max of user-defined expressions
const min4 = Math.min(10 + 5, 20 - 8, 3 * 7);
const max4 = Math.max(10 + 5, 20 - 8, 3 * 7);

// 5. Min/max of mixed numbers and variables
const x = 12, y = -3, z = 7;
const min5 = Math.min(x, y, z, 0);
const max5 = Math.max(x, y, z, 100);

// Display results
console.log("Min1:", min1, "Max1:", max1);
console.log("Min2:", min2, "Max2:", max2);
console.log("Min3:", min3, "Max3:", max3);
console.log("Min4:", min4, "Max4:", max4);
console.log("Min5:", min5, "Max5:", max5);
