// Validate a beverage order.

function validateOrder(quantity, stock) {
    if (quantity <= 0 || stock < 0) {
        return "Invalid Order";
    }
    if (quantity > stock) {
        return "Insufficient Stock";
    }
    return "Order Approved";
}

console.log(validateOrder(25, 100));
console.log(validateOrder(150, 100));