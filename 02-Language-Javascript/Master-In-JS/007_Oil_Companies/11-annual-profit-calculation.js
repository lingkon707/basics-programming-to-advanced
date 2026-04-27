var revenue = 85000000;
var expense = 64000000;
var taxRate = 0.2;

var profit = revenue - expense;
var tax = profit * taxRate;
var netProfit = profit - tax;

console.log("Net Profit:", netProfit);