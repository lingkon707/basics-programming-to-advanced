// Example: Combine multiple Promise patterns
const pA = Promise.resolve(10);
const pB = Promise.resolve(20);
Promise.all([pA, pB])
  .then(vals => vals.reduce((a,b)=>a+b,0))
  .then(sum => console.log("Sum:", sum)); // 30
