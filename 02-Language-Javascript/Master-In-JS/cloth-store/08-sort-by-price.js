const products = [
  { name: "Shirt", price: 600 },
  { name: "Polo", price: 950 },
  { name: "Jacket", price: 2500 },
];

products.sort((a, b) => a.price - b.price);
console.log("Sorted by price:", products);
