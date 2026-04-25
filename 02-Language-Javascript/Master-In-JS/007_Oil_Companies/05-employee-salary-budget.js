var employees = 340;
var avgSalary = 48000;
var bonusRate = 0.1;

var base = employees * avgSalary;
var bonus = base * bonusRate;
var total = base + bonus;

console.log("Salary Budget:", total);