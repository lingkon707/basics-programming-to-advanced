// Block orders that exceed a retailer's credit limit.
function approveCredit(balance, order, limit) {
    if (balance < 0 || order <= 0 || limit < 0) {
        return "Invalid Credit Data";
    }
    if (balance + order > limit) {
        return "Order Blocked: Credit Limit";
    }
    return "Credit Approved";
}

console.log(approveCredit(8000, 3000, 10000));
console.log(approveCredit(4000, 3000, 10000));