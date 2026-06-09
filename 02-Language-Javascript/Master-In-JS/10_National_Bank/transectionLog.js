// 8_transaction_log.js
var transactions = [];
function logTransaction(type, amount) {
  transactions.push(type + ":" + amount);
  console.log("Transaction Logged:", type, amount);
}
logTransaction("Deposit", 2000);