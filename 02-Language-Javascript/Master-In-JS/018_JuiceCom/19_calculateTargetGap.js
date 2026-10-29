// Calculate the remaining sales target.
var monthlyTarget = 200000;
var currentSales = 137500;
var daysRemaining = 5;

if (monthlyTarget > 0 && daysRemaining > 0) {
    var gap = monthlyTarget - currentSales;
    var dailyRequired = gap > 0 ? gap / daysRemaining : 0;
    console.log("Target Gap: " + Math.max(0, gap) + " BDT");
    console.log("Daily Required: " + dailyRequired + " BDT");
} else {
    console.log("Check Target and Remaining Days");
}