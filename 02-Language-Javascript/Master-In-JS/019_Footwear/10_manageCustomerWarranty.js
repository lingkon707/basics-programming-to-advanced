// Check footwear warranty eligibility.

function checkWarranty(purchaseDays, warrantyDays) {
    if (purchaseDays < 0 || warrantyDays < 0) {
        return "Invalid Warranty Data";
    }
    if (purchaseDays <= warrantyDays) {
        return "Warranty Active";
    }
    return "Warranty Expired";
}

console.log(checkWarranty(45, 90));
console.log(checkWarranty(120, 90));