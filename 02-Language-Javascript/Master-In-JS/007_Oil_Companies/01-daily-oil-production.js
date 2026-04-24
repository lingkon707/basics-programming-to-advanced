var wells = 12;
var avgPerWell = 850;
var downtime = 0.08;

var totalProduction = wells * avgPerWell;
var loss = totalProduction * downtime;
var netProduction = totalProduction - loss;

console.log("Total:", totalProduction);
console.log("Net:", netProduction);