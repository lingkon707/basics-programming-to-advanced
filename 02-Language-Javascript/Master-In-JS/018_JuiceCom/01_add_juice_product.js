var products = [];

function addProduct(name, price) {
    products.push({
        name: name,
        price: price
    });
}

addProduct("Mango Juice", 120);
addProduct("Orange Juice", 140);

console.log(products);