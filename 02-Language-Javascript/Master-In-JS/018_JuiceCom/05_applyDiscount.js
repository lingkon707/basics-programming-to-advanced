// Apply a discount to bulk orders.

var price = 5000;
var discountRate = 10;

if (price >= 3000) {
    var discount = price * discountRate / 100;
    price = price - discount;
    console.log("Discount Applied: " + discount + " BDT");
}
console.log("Final Price: " + price + " BDT");