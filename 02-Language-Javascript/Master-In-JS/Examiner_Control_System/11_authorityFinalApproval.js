// 11_authorityFinalApproval.js
var securityOk = true;
var staffOk = false;
var logisticsOk = true;

console.log(
  "FINAL AUTHORITY DECISION →",
  securityOk && staffOk && logisticsOk
    ? "EXAM CONDUCT APPROVED"
    : "EXAM HALTED – MULTIPLE FAILURES IDENTIFIED"
);