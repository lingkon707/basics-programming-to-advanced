var hours = 96;
var burnRate = 280;

var fuelUsed = hours * burnRate;
var reserveFuel = fuelUsed * 0.1;

console.log("Fuel Required:", fuelUsed + reserveFuel);