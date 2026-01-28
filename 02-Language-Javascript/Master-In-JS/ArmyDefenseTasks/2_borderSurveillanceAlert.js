// 2_borderSurveillanceAlert.js
var sectorsMonitored = 15;
var sectorsRequired = 18;

console.log(
  "BORDER SURVEILLANCE → Active Sectors:",
  sectorsMonitored,
  "| Coverage:",
  Math.round((sectorsMonitored / sectorsRequired) * 100) + "%",
  "| ALERT:",
  sectorsMonitored < sectorsRequired
    ? "SURVEILLANCE GAP – IMMEDIATE ACTION"
    : "FULL COVERAGE"
);