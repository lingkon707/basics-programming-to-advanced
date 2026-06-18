// 002-discount-engine.js

var price = 120;
var discount = price > 100 ? price * 0.15 : price * 0.05;

var finalPrice = price - discount;

console.log("Final Price: " + finalPrice);