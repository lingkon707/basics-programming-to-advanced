// Measure profit from a sales promotion.
var extraUnits = 500;
var profitPerUnit = 12;
var promotionCost = 3000;

var extraProfit = extraUnits * profitPerUnit;
var netGain = extraProfit - promotionCost;
var roi = promotionCost > 0 ? netGain / promotionCost * 100 : 0;

console.log("Extra Profit: " + extraProfit + " BDT");
console.log("Net Gain: " + netGain + " BDT");
console.log("Promotion ROI: " + roi + "%");