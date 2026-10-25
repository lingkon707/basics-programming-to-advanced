// Alert managers to a significant sales decline.
var previousSales = 1000;
var currentSales = 720;
var dropRate;

if (previousSales > 0 && currentSales >= 0) {
    dropRate = (previousSales - currentSales) /
        previousSales * 100;
    console.log("Sales Drop: " + dropRate + "%");
    if (dropRate >= 20) {
        console.log("Action: Investigate Sales Decline");
    }
} else {
    console.log("Invalid Sales Data");
}