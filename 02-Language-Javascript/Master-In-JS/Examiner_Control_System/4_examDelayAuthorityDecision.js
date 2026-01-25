// 4_examDelayAuthorityDecision.js
var powerAvailable = false;

console.log(
  "EXAM START AUTHORIZATION → Power Supply:",
  powerAvailable,
  "| AUTHORITY DECISION:",
  powerAvailable
    ? "EXAM PROCEED AS SCHEDULED"
    : "DELAY APPROVED – INFORM BOARD"
);