// 28_staffAbsenteeismMonitor.js
var totalStaff = 1200;
var absentStaff = 190;

var rate = (absentStaff / totalStaff) * 100;

console.log(
  "STAFF ATTENDANCE MONITOR → Absence Rate:",
  rate.toFixed(2) + "%",
  "| STATUS:",
  rate > 10
    ? "ADMINISTRATIVE FAILURE ALERT"
    : "DISCIPLINE MAINTAINED"
);