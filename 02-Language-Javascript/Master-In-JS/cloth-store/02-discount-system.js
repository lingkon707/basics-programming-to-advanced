const price = 1200;
const discount = price > 1000 ? 0.15 : 0.05;
const finalPrice = price - price * discount;

console.log(`Final Price: ৳${finalPrice}`);
