var litersSold = 54000;
var pricePerLiter = 118;

var revenue = litersSold * pricePerLiter;
var vat = revenue * 0.05;

console.log("Net Sales:", revenue - vat);