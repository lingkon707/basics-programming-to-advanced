const order = {
  customer: "Rakib",
  items: ["Panjabi", "Jeans"],
  total: 3200,
  status: "Pending",
};

console.log(`Order Summary for ${order.customer}:`);
console.log(`Items: ${order.items.join(", ")}`);
console.log(`Total: ৳${order.total}`);
console.log(`Status: ${order.status}`);
