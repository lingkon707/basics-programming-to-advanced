// Prevent loading above van capacity.

var vanCapacity = 200;
var cases = [60, 75, 50];
var totalCases = 0;
var i;

for (i = 0; i < cases.length; i++) {
    if (cases[i] < 0) {
        console.log("Invalid Case Quantity");
        break;
    }
    totalCases += cases[i];
}
if (i === cases.length) {
    console.log("Total Cases: " + totalCases);
    console.log(totalCases > vanCapacity ? "Over Capacity" : "Load Approved");
}