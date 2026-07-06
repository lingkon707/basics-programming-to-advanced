function tradeResult(buy, sell, qty) {
    return (sell - buy) * qty;
}

var result = tradeResult(30000, 34000, 2);
console.log(result > 0 ? "Profit: " + result : "Loss: " + result);