var rigs = 5;
var costPerRig = 1250000;
var insurance = 0.07;

var baseCost = rigs * costPerRig;
var insuranceCost = baseCost * insurance;
var totalCost = baseCost + insuranceCost;

console.log("Total Expense:", totalCost);