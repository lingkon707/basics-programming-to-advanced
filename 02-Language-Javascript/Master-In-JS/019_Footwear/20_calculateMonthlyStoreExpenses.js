// Calculate total footwear store expenses.

var expenses = [
    { name: "Rent", amount: 12000 },
    { name: "Electricity", amount: 2500 },
    { name: "Staff Salary", amount: 18000 },
    { name: "Transport", amount: 3000 },
    { name: "Maintenance", amount: 1500 }
];
var total = 0;
var i;

for (i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
console.log("Monthly Expenses: " + total + " BDT");