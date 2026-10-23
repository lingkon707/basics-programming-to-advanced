// Summarize daily beverage sales.
var sales = [1200, 1500, 1800, 900, 2100];
var total = 0;
var i;

for (i = 0; i < sales.length; i++) {
    total += sales[i];
}

console.log("Sales Days: " + sales.length);
console.log("Total Sales: " + total + " BDT");
console.log("Average Sales: " + (total / sales.length) + " BDT");