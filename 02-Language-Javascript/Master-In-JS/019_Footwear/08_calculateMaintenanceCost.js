// Calculate footwear machine maintenance cost.

var maintenance = [
    { machine: "Cutting Machine", cost: 1500 },
    { machine: "Sewing Machine", cost: 800 },
    { machine: "Sole Press", cost: 1200 }
];
var total = 0;
var i;

for (i = 0; i < maintenance.length; i++) {
    total += maintenance[i].cost;
}
console.log("Maintenance Cost: " + total + " BDT");