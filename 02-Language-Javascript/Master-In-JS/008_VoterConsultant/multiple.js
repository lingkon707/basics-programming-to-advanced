// Fundamental JavaScript ES5 Console Examples

// 1. Variables
var company = "Oil Corp";
var barrels = 5000;
var price = 78.5;

console.log("Company:", company);
console.log("Barrels:", barrels);
console.log("Price:", price);

// 2. Data Types
var isActive = true;
var data = null;
var value;

console.log(typeof company);
console.log(typeof barrels);
console.log(typeof isActive);

// 3. Array
var companies = ["Shell", "Chevron", "BP"];

console.log(companies[0]);

// Loop through array
for (var i = 0; i < companies.length; i++) {
    console.log("Company:", companies[i]);
}

// 4. Object
var oilCompany = {
    name: "ExxonMobil",
    country: "USA",
    employees: 62000
};

console.log(oilCompany.name);
console.log(oilCompany.country);

// 5. Function
function calculateRevenue(barrels, rate) {
    return barrels * rate;
}

var revenue = calculateRevenue(1000, 80);
console.log("Revenue:", revenue);

// 6. If Else
var oilPrice = 90;

if (oilPrice > 85) {
    console.log("Oil price is high");
} else {
    console.log("Oil price is normal");
}

// 7. While Loop
var count = 1;

while (count <= 3) {
    console.log("Drilling site:", count);
    count++;
}

// 8. For Loop
for (var j = 1; j <= 5; j++) {
    console.log("Pump Number:", j);
}

// 9. Switch Case
var grade = "A";

switch (grade) {
    case "A":
        console.log("Premium Oil");
        break;
    case "B":
        console.log("Standard Oil");
        break;
    default:
        console.log("Unknown Grade");
}

// 10. Simple Constructor Function
function Employee(name, position) {
    this.name = name;
    this.position = position;
}

var emp1 = new Employee("Rahim", "Engineer");

console.log(emp1.name);
console.log(emp1.position);