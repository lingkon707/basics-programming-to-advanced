var barrels = 150000;
var pricePerBarrel = 78;
var taxRate = 0.12;

var baseCost = barrels * pricePerBarrel;
var tax = baseCost * taxRate;
var totalCost = baseCost + tax;

console.log("Import Cost:", totalCost);