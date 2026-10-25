// Calculate a sales employee's bonus.
function calculateBonus(sales, target) {
    if (sales < 0 || target <= 0) {
        return "Invalid Data";
    }
    if (sales >= target) {
        return sales * 0.05;
    }
    return 0;
}

console.log("Bonus: " + calculateBonus(50000, 40000) + " BDT");
console.log("Bonus: " + calculateBonus(30000, 40000) + " BDT");