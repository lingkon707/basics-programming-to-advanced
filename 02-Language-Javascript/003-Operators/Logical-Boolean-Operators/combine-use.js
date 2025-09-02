
let seeds = true;
let water = true;
let canPlant = seeds && water;  

let cows = false;
let goats = true;
let hasAnimals = cows || goats;  

let rain = true;
let dry = !rain;  

let readyForMarket = canPlant && hasAnimals;
console.log("Can the villager plant crops and sell animals?", readyForMarket); // true

let goodDay = (seeds || water) && !rain;
console.log("Is it a good day for farming?", goodDay); // false
