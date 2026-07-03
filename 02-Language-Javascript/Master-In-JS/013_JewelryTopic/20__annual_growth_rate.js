var lastYearRevenue = 5200000;
var thisYearRevenue = 6100000;

var growth = thisYearRevenue - lastYearRevenue;

var growthRate = (growth / lastYearRevenue) * 100;

console.log("Annual Growth Rate:", growthRate.toFixed(2) + "%");