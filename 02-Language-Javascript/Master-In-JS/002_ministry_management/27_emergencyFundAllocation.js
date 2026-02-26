// 27_emergencyFundAllocation.js
var emergencyFund = 20000000;
var disasterRequest = 25000000;

console.log(
  "EMERGENCY FUND STATUS → Available:",
  emergencyFund,
  "| Requested:",
  disasterRequest,
  "| ACTION:",
  disasterRequest > emergencyFund
    ? "ADDITIONAL PARLIAMENT APPROVAL REQUIRED"
    : "APPROVED"
);