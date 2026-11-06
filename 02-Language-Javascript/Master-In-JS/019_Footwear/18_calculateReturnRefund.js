// Calculate customer refund after a return.

function calculateRefund(price, quantity, fee) {
    if (price < 0 || quantity <= 0 || fee < 0) {
        return "Invalid Return";
    }
    var refund = price * quantity - fee;
    return Math.max(0, refund);
}

console.log("Refund: " + calculateRefund(1200, 2, 100) + " BDT");