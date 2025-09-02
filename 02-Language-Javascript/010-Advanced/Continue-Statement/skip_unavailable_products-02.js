const _ = require('underscore');

// Sample array of product objects
const products = [
  { name: 'Laptop', available: true },
  { name: 'Phone', available: false },
  { name: 'Tablet', available: true },
  { name: 'Headphones', available: false }
];

let index = 0;

while (index < products.length) {
  const product = products[index];
  index++; // increment first to avoid infinite loop if continue is called

  if (!product.available) {
    continue; // skip unavailable products
  }

  console.log('Available product:', product.name);
}
