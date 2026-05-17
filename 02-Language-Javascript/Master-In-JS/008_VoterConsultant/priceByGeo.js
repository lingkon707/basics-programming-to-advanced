// geopolitics-price-control.js

// JavaScript ES5 Console Program

// Global oil price
var oilPrice = 80;

// Geopolitical factors
var war = true;
var sanctions = false;
var opecCut = true;
var highDemand = true;

// Price control logic
if (war) {
    oilPrice += 15;
    console.log("War increased oil price");
}

if (sanctions) {
    oilPrice += 10;
    console.log("Sanctions increased oil price");
}

if (opecCut) {
    oilPrice += 8;
    console.log("OPEC production cut increased price");
}

if (highDemand) {
    oilPrice += 5;
    console.log("High demand increased price");
}

// Final price
console.log("-----------------------");
console.log("Final Oil Price: $" + oilPrice + " per barrel");

// Market condition
if (oilPrice >= 100) {
    console.log("Market Status: Crisis Level");
} else if (oilPrice >= 85) {
    console.log("Market Status: Expensive");
} else {
    console.log("Market Status: Stable");
}