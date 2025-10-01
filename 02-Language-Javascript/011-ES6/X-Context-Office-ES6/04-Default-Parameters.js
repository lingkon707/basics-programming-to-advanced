const calculateDiscount = (amount, discount = 0.1) => amount * (1 - discount);
console.log(calculateDiscount(1000)); // 900 (default 10%)
console.log(calculateDiscount(1000, 0.2)); // 800 (20% discount)
