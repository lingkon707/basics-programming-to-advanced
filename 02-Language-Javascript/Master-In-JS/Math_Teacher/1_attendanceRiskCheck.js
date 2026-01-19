// 1_attendanceRiskCheck.js
var totalStudents = 45;
var presentStudents = 32;

console.log(
  "Attendance Report → Present:",
  presentStudents,
  "| Absent:",
  totalStudents - presentStudents,
  "| Risk Level:",
  presentStudents < 35 ? "CRITICAL – Inform Authority" : "Normal"
);