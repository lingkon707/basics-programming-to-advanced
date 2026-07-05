var localPrice = 8580;
var internationalPrice = 8790;
var taxCost = 160;

var arbitrage = internationalPrice - (localPrice + taxCost);

console.log("Arbitrage Opportunity:", arbitrage > 0);