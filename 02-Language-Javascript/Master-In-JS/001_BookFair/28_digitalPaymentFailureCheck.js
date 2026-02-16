// 28_digitalPaymentFailureCheck.js

var totalTransactions = 9000;
var failedTransactions = 450;

console.log(
  "DIGITAL PAYMENT MONITOR → Failure Rate:",
  ((failedTransactions / totalTransactions) * 100).toFixed(2) + "%",
  "| ACTION:",
  failedTransactions > 500
    ? "SYSTEM ESCALATION REQUIRED"
    : "SYSTEM STABLE"
);