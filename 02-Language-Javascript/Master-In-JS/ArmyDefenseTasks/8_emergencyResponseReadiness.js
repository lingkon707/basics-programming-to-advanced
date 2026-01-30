// 8_emergencyResponseReadiness.js

var responseTime = 18; // minutes

console.log(
  "EMERGENCY RESPONSE → Response Time:",
  responseTime,
  "min | STATUS:",
  responseTime > 15 ? "DELAY RISK – OPTIMIZATION REQUIRED" : "ACCEPTABLE"
);