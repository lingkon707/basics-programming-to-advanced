var portfolio = [
    { coin: "BTC", price: 65000, qty: 0.5 },
    { coin: "ETH", price: 3500, qty: 5 }
];

function calculateValue(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i].price * list[i].qty;
    }
    return sum;
}

console.log("Total Portfolio Value:", calculateValue(portfolio));