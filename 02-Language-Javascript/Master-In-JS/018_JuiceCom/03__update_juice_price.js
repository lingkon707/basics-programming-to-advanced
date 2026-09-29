var products = [
    { name: "Mango Juice", price: 120 },
    { name: "Orange Juice", price: 140 }
];

function updatePrice(name, newPrice) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            products[i].price = newPrice;
            return true;
        }
    }
    return false;
}

updatePrice("Mango Juice", 130);

console.log(products);