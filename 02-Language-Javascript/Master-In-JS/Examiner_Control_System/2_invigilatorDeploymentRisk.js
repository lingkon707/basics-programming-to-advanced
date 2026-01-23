// 2_invigilatorDeploymentRisk.js
var invigilatorsPresent = 22;
var invigilatorsRequired = 25;

console.log(
  "INVIGILATOR DEPLOYMENT → Present:",
  invigilatorsPresent,
  "| Shortage:",
  invigilatorsRequired - invigilatorsPresent,
  "| DECISION:",
  invigilatorsPresent < invigilatorsRequired
    ? "EMERGENCY STAFF ASSIGNMENT REQUIRED"
    : "Deployment Adequate"
);