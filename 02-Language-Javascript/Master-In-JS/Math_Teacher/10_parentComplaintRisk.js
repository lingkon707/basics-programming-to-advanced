// 10_parentComplaintRisk.js
var complaintCalls = 3;

console.log(
  "Parent Communication Log → Complaints:",
  complaintCalls,
  "| Risk Level:",
  complaintCalls >= 3 ? "FORMAL MEETING REQUIRED" : "Monitor"
);