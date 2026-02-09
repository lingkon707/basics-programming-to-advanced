// 09_ticketRevenueMismatch.js
var ticketsSold = 12000;
var revenueReported = 11500;

console.log(
  "TICKET AUDIT → Mismatch:",
  ticketsSold - revenueReported,
  "| ALERT:",
  ticketsSold !== revenueReported ? "FINANCIAL REVIEW REQUIRED" : "CLEAR"
);