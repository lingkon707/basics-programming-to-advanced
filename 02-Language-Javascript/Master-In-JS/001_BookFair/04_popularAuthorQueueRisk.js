// 04_popularAuthorQueueRisk.js
var queueLength = 90;

console.log(
  "AUTHOR SESSION QUEUE → Length:",
  queueLength,
  "| CONTROL:",
  queueLength > 70 ? "EXTRA SECURITY NEEDED" : "MANAGEABLE"
);