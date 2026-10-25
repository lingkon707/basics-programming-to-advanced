// Generate a report for beverage products.
var products = [
    { name: "Cola", sold: 100, price: 40 },
    { name: "Juice", sold: 80, price: 60 },
    { name: "Water", sold: 120, price: 20 }
];
var totalRevenue = 0;
var i, revenue;

for (i = 0; i < products.length; i++) {
    revenue = products[i].sold * products[i].price;
    totalRevenue += revenue;
    console.log(products[i].name + ": " + revenue + " BDT");
}
console.log("Total Revenue: " + totalRevenue + " BDT");