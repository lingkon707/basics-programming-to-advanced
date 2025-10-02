// Example: Promise.allSettled
const p6 = Promise.resolve(10);
const p7 = Promise.reject("Error!");
Promise.allSettled([p6, p7]).then(results => console.log(results));
