// Find incorrect product prices.
var products = [
    { name: "Cola", price: 40, expected: 40 },
    { name: "Juice", price: 55, expected: 60 },
    { name: "Water", price: 20, expected: 20 }
];
var i;

for (i = 0; i < products.length; i++) {
    if (products[i].price !== products[i].expected) {
        console.log(products[i].name + ": Price Mismatch");
    }
}