// Check whether stock needs refilling.

var productName = "Mango Juice";
var stock = 15;
var minimumStock = 20;

if (stock < minimumStock) {
    console.log(productName + ": Low Stock");
} else {
    console.log(productName + ": Stock Available");
}