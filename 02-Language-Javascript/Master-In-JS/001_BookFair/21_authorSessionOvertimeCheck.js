// 21_authorSessionOvertimeCheck.js
var scheduledMinutes = 60;
var actualMinutes = 85;

console.log(
  "AUTHOR SESSION TIME CONTROL → Scheduled:",
  scheduledMinutes,
  "| Actual:",
  actualMinutes,
  "| STATUS:",
  actualMinutes > scheduledMinutes
    ? "OVERTIME – RESCHEDULE NEXT SESSION"
    : "ON TIME"
);