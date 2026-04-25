var transported = 98000;
var leakageRate = 0.03;

var leakage = transported * leakageRate;
var delivered = transported - leakage;

console.log("Delivered Fuel:", delivered);