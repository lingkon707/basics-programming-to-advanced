var exportBarrels = 76000;
var exportPrice = 84;
var shippingCost = 320000;

var revenue = exportBarrels * exportPrice;
var netRevenue = revenue - shippingCost;

console.log("Export Revenue:", netRevenue);