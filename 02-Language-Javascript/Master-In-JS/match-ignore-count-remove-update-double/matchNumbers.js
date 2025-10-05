const text = "Prices: 50, 120, and 300 taka.";
const numbers = text.match(/\d+/g).map(Number);
console.log(numbers); // [50, 120, 300]
