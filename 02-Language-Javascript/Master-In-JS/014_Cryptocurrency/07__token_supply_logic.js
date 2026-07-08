var maxSupply = 21000000;
var circulating = 19500000;

var supplyStatus = circulating >= maxSupply ? "Maxed Out" : "Available";
console.log("Supply Status:", supplyStatus);