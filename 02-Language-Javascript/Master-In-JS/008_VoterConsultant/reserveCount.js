// reserve-count.js
// JavaScript ES5 Console Program

// Oil reserve data
var oilCompanies = [
    {
        name: "Saudi Aramco",
        reserve: 267
    },
    {
        name: "ExxonMobil",
        reserve: 68
    },
    {
        name: "Chevron",
        reserve: 25
    },
    {
        name: "BP",
        reserve: 19
    }
];

// Total reserve counter
var totalReserve = 0;

// Loop through companies
for (var i = 0; i < oilCompanies.length; i++) {

    console.log(
        "Company: " + oilCompanies[i].name +
        " | Reserve: " + oilCompanies[i].reserve + " Billion Barrels"
    );

    totalReserve += oilCompanies[i].reserve;
}

// Final total
console.log("---------------------------");
console.log("Total Oil Reserve: " + totalReserve + " Billion Barrels");