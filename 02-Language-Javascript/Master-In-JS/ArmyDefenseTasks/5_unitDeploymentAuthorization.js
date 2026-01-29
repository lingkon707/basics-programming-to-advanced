// 5_unitDeploymentAuthorization.js
var intelClearance = true;
var weatherClear = false;

console.log(
  "UNIT DEPLOYMENT AUTHORIZATION →",
  intelClearance && weatherClear
    ? "DEPLOYMENT APPROVED"
    : "DEPLOYMENT ON HOLD – CONDITIONS UNSATISFACTORY"
);