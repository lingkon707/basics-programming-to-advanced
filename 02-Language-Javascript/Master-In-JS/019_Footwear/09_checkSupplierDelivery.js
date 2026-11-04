// Check supplier delivery shortages.

var ordered = 500;
var received = 460;

if (ordered < 0 || received < 0) {
    console.log("Invalid Delivery Data");
} else if (received < ordered) {
    console.log("Shortage: " + (ordered - received) + " Pairs");
} else if (received > ordered) {
    console.log("Extra Delivery: " + (received - ordered) + " Pairs");
} else {
    console.log("Delivery Complete");
}