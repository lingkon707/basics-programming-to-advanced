var employees = [
    { role: "Developer", salary: 5000 },
    { role: "Analyst", salary: 4200 },
    { role: "Trader", salary: 7000 }
];

var total = 0;
for (var i = 0; i < employees.length; i++) {
    total += employees[i].salary;
}

console.log("Average Salary:", total / employees.length);