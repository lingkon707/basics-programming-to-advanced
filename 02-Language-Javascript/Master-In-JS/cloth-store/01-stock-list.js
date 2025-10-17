const clothes = [
  { id: 1, name: "Panjabi", stock: 12 },
  { id: 2, name: "Saree", stock: 8 },
  { id: 3, name: "T-shirt", stock: 25 },
];

clothes.forEach(item => {
  console.log(`${item.name} - ${item.stock} pieces available`);
});
