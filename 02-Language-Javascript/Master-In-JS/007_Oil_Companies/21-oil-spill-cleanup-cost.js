var area = 1200;
var costPerUnit = 4500;

var cleanupCost = area * costPerUnit;
var emergencyFund = cleanupCost * 0.2;

console.log("Total Cleanup:", cleanupCost + emergencyFund);