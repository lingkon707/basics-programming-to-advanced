// 30_closingDayAuthorityEvaluation.js
var financeClear = true;
var safetyClear = true;
var complianceClear = true;
var reputationClear = false;

console.log(
  financeClear && safetyClear && complianceClear && reputationClear
    ? "BOOK FAIR OFFICIALLY CLOSED WITH SUCCESS"
    : "CLOSING REPORT FLAGGED – REVIEW BY AUTHORITY REQUIRED"
);