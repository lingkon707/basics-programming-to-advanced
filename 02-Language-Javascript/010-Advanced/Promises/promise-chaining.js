// Example: Chaining promises
function multiplyBy2(x) { return Promise.resolve(x * 2); }
multiplyBy2(5).then(result => multiplyBy2(result)).then(final => console.log(final)); // 20
