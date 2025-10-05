const a = "Hello, world!";
const b = "hello world";
const normalize = str => str.toLowerCase().replace(/[^\w\s]/g, '');
console.log(normalize(a) === normalize(b)); // true
