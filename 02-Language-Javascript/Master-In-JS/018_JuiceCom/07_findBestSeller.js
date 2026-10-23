// Find the best-selling beverage.
var products = ["Cola", "Juice", "Water"];
var quantities = [150, 230, 180];
var bestIndex = 0;
var i;

for (i = 1; i < quantities.length; i++) {
    if (quantities[i] > quantities[bestIndex]) {
        bestIndex = i;
    }
}
console.log("Best Seller: " + products[bestIndex]);
console.log("Units Sold: " + quantities[bestIndex]);