// 4_commandCommunicationStatus.js
var signalStrength = 65; // percent

console.log(
  "COMMAND COMMUNICATION → Signal Strength:",
  signalStrength + "%",
  "| STATUS:",
  signalStrength < 70 ? "UNSTABLE – BACKUP CHANNEL REQUIRED" : "SECURE"
);