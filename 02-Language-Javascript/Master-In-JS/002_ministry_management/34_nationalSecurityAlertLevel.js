// 34_nationalSecurityAlertLevel.js

var threatLevel = 4; // 1-5 scale

console.log(
  "NATIONAL SECURITY LEVEL:",
  threatLevel,
  "| STATUS:",
  threatLevel >= 4
    ? "HIGH ALERT – SECURITY DEPLOYMENT REQUIRED"
    : "NORMAL SURVEILLANCE"
);