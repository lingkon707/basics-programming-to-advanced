const cart = [
  { name: "Saree", price: 1800 },
  { name: "T-shirt", price: 500 },
  { name: "Jeans", price: 950 },
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(`Total Bill: ৳${total}`);
