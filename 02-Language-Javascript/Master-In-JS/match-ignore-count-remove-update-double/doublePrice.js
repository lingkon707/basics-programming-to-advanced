const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 }
];
const updated = products.map(p => ({ ...p, price: p.price * 2 }));
console.log(updated); // [{name:'Pen',price:20},{name:'Book',price:100}]
