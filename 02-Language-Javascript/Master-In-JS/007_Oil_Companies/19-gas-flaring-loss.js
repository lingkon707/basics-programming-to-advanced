var gasProduced = 26000;
var flareRate = 0.18;

var flaredGas = gasProduced * flareRate;
var usableGas = gasProduced - flaredGas;

console.log("Usable Gas:", usableGas);