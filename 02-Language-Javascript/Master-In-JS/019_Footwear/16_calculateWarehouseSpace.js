// Check warehouse storage capacity.

var warehouseCapacity = 5000;
var storedPairs = 4200;
var incomingPairs = 1000;

var availableSpace = warehouseCapacity - storedPairs;

if (incomingPairs <= availableSpace) {
    console.log("Storage Approved");
} else {
    console.log("Storage Full");
    console.log("Excess Pairs: " + (incomingPairs - availableSpace));
}