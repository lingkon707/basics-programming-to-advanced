// 01_bookStallReadiness.js
var stallsReady = 45;
var stallsRequired = 50;

console.log(
  "STALL READINESS → Ready:",
  stallsReady,
  "| Required:",
  stallsRequired,
  "| STATUS:",
  stallsReady >= stallsRequired ? "READY FOR OPENING" : "DELAY OPENING"
);