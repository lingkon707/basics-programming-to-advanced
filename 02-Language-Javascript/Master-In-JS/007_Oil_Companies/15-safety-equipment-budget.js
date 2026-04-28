var workers = 420;
var kitCost = 3200;
var reserve = 0.05;

var baseCost = workers * kitCost;
var totalCost = baseCost + (baseCost * reserve);

console.log("Safety Budget:", totalCost);