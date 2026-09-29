var order = [
    { price: 120, quantity: 3 },
    { price: 150, quantity: 2 }
];

function getTotal(order) {
    var total = 0;

    for (var i = 0; i < order.length; i++) {
        total += order[i].price * order[i].quantity;
    }

    return total;
}

console.log(getTotal(order));