// -scholarship-eligibility.js

var gpa = 3.7;
var attendance = 85;

var eligible = gpa >= 3.5 && attendance >= 80;

console.log("Scholarship:", eligible ? "ELIGIBLE" : "NOT ELIGIBLE");