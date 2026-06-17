// 016-customer-segment.js

var spend = 450;
var segment = spend > 500 ? "PREMIUM" : spend > 200 ? "GROWTH" : "BASIC";

console.log("Customer Segment: " + segment);