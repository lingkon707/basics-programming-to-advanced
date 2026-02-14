// 22_bookPriceManipulationAlert.js
var officialPrice = 500;
var sellingPrice = 650;

console.log(
  "PRICE VERIFICATION → Official:",
  officialPrice,
  "| Selling:",
  sellingPrice,
  "| ALERT:",
  sellingPrice > officialPrice
    ? "OVERPRICING DETECTED – PENALTY NOTICE"
    : "PRICE COMPLIANT"
);