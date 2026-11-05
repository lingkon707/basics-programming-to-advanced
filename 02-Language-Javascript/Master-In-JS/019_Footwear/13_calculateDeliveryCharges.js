// Calculate customer delivery charges.

function deliveryCharge(orderAmount, distance) {
    if (orderAmount < 0 || distance < 0) {
        return "Invalid Order";
    }
    if (orderAmount >= 3000) {
        return 0;
    }
    return distance * 15;
}

console.log("Delivery: " + deliveryCharge(1500, 5) + " BDT");
console.log("Delivery: " + deliveryCharge(3500, 5) + " BDT");