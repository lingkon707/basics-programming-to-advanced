// Example: Promise.race
const p8 = new Promise(resolve => setTimeout(() => resolve("First"), 500));
const p9 = new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
Promise.race([p8, p9]).then(val => console.log(val)); // "First"
