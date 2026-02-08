// 03_bookStockShortage.js
var demandedBooks = 500;
var availableBooks = 430;

console.log(
  "STOCK CHECK → Shortage:",
  demandedBooks - availableBooks,
  "| ACTION:",
  availableBooks < demandedBooks ? "URGENT RESTOCK" : "STOCK OK"
);