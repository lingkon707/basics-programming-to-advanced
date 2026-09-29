var products = [
    "Mango Juice",
    "Orange Juice",
    "Apple Juice"
];

function removeProduct(name) {
    var index = products.indexOf(name);

    if (index !== -1) {
        products.splice(index, 1);
        return true;
    }

    return false;
}

removeProduct("Orange Juice");

console.log(products);