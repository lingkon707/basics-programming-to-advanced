// Example: then chaining
Promise.resolve(5)
  .then(val => val * 2)
  .then(val => val + 3)
  .then(val => console.log(val)); // 13
