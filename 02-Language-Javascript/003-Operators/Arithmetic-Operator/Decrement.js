// A villager has 8 chickens, but one was sold
let chickens = 8;

chickens--; // decrement by 1
console.log("Chickens left:", chickens); // 7

// here - (prints first, then decreases)
let goats = 12;
console.log("Before:", goats);   // 12
console.log("After --:", goats--); // 12 (prints first, then decreases)
console.log("Now goats:", goats);  // 11
