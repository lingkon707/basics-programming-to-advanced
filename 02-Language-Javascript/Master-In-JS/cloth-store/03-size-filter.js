const shirts = [
  { name: "Cotton Shirt", size: "M" },
  { name: "Formal Shirt", size: "L" },
  { name: "Casual Shirt", size: "M" },
];

const mediumShirts = shirts.filter(s => s.size === "M");
console.log("Medium Size Shirts:", mediumShirts);
