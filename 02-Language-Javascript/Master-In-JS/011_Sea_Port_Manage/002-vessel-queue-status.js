// 002-vessel-queue-status.js

var incoming = 7;
var maxQueue = 5;

var status = incoming > maxQueue ? "QUEUE OVERLOAD" : "QUEUE NORMAL";

console.log("Vessel Queue:", status);