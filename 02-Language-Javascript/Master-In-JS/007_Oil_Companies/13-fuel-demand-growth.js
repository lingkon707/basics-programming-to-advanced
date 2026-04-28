var currentDemand = 120000;
var growthRate = 0.07;

var nextYear = currentDemand + (currentDemand * growthRate);
var twoYearsLater = nextYear + (nextYear * growthRate);

console.log("Future Demand:", twoYearsLater);