// Example: Promise.any
const p10 = Promise.reject("Fail 1");
const p11 = Promise.resolve("Success 1");
Promise.any([p10, p11]).then(val => console.log(val)); // "Success 1"
