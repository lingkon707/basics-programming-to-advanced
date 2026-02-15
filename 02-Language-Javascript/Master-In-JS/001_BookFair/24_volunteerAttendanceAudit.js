// 24_volunteerAttendanceAudit.js
var volunteersRequired = 120;
var volunteersPresent = 98;

console.log(
  "VOLUNTEER DEPLOYMENT → Present:",
  volunteersPresent,
  "| Shortage:",
  volunteersRequired - volunteersPresent,
  "| RISK:",
  volunteersPresent < volunteersRequired
    ? "SERVICE DELAY POSSIBLE"
    : "ADEQUATE SUPPORT"
);