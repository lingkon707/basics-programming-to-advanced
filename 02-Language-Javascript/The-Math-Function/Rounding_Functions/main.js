// Simple examples of rounding functions

const num = 7.6;

// Round to nearest integer
const rounded = Math.round(num); // 8

// Round down
const roundedDown = Math.floor(num); // 7

// Round up
const roundedUp = Math.ceil(num); // 8

// Remove fractional part
const truncated = Math.trunc(num); // 7

// Display results
console.log("Original number:", num);
console.log("Math.round:", rounded);
console.log("Math.floor:", roundedDown);
console.log("Math.ceil:", roundedUp);
console.log("Math.trunc:", truncated);
