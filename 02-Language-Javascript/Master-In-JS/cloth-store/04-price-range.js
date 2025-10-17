const products = [
  { name: "Jeans", price: 900 },
  { name: "T-shirt", price: 450 },
  { name: "Blazer", price: 2500 },
];

const range = products.filter(p => p.price >= 500 && p.price <= 1500);
console.log("Affordable Range:", range);
