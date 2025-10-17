let cart = [];

function addToCart(product) {
  cart.push(product);
  console.log(`${product.name} added to cart`);
}

addToCart({ name: "Saree", price: 1800 });
addToCart({ name: "T-shirt", price: 500 });

console.log(cart);
