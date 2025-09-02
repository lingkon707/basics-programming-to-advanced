const products = ["Rice", "Oil", "Sugar", "Salt"];
const unavailable = ["Oil", "Salt"];

for (let i = 0; i < products.length; i++) {
    if (unavailable.includes(products[i])) {
        continue; // Skip unavailable products
    }
    console.log("Available product:", products[i]);
}
