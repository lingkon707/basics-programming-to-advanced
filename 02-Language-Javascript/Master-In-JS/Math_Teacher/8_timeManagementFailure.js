// 8_timeManagementFailure.js
var classTime = 45;
var topicTimeNeeded = 60;

console.log(
  "Time Allocation → Class Time:",
  classTime,
  "min | Required:",
  topicTimeNeeded,
  "min | Decision:",
  topicTimeNeeded > classTime ? "TOPIC SPLIT REQUIRED" : "Can Finish"
);