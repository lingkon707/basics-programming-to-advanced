// Example: Promise.all
const p3 = Promise.resolve(1);
const p4 = Promise.resolve(2);
const p5 = Promise.resolve(3);
Promise.all([p3, p4, p5]).then(vals => console.log(vals)); // [1,2,3]
