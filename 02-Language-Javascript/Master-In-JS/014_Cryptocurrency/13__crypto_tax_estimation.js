function tax(profit) {
    return profit > 0 ? profit * 0.15 : 0;
}

console.log("Estimated Tax:", tax(20000));