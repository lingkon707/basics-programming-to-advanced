// Example: Promise.reject
const p2 = Promise.reject("Rejected value");
p2.catch(err => console.log(err));
