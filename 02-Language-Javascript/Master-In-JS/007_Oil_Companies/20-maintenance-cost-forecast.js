var machines = 48;
var costPerMachine = 22000;
var inflationRate = 0.06;

var currentCost = machines * costPerMachine;
var forecastCost = currentCost + (currentCost * inflationRate);

console.log("Next Year Cost:", forecastCost);