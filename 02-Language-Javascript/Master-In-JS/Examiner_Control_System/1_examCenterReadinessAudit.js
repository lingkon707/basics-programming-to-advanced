// 1_examCenterReadinessAudit.js
var roomsReady = 18;
var roomsRequired = 20;

console.log(
  "EXAM CENTER AUDIT → Rooms Ready:",
  roomsReady,
  "| Required:",
  roomsRequired,
  "| STATUS:",
  roomsReady < roomsRequired
    ? "CRITICAL FAILURE – EXAM CANNOT START"
    : "Approved for Examination"
);