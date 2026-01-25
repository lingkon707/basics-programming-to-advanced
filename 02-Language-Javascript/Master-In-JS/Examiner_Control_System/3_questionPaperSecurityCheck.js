// 3_questionPaperSecurityCheck.js
var sealedPackets = 40;
var expectedPackets = 40;

console.log(
  "QUESTION PAPER SECURITY → Packets:",
  sealedPackets,
  "| Integrity:",
  sealedPackets === expectedPackets
    ? "SECURE – NO BREACH DETECTED"
    : "SECURITY BREACH – IMMEDIATE REPORT"
);