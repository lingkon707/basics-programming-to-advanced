// Calculate stock needed for the next delivery.

var dailyDemand = 40;
var leadDays = 4;
var currentStock = 90;
var safetyStock = 30;

var requiredStock = dailyDemand * leadDays + safetyStock;
var reorderQuantity = Math.max(0, requiredStock - currentStock);

console.log("Required Stock: " + requiredStock);
console.log("Reorder Quantity: " + reorderQuantity);