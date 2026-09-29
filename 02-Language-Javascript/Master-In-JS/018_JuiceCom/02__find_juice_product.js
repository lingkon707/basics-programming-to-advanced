var products = [
    { name: "Mango Juice", price: 120 },
    { name: "Apple Juice", price: 150 }
];

function findProduct(name) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            return products[i];
        }
    }
    return null;
}

console.log(findProduct("Apple Juice"));