// JSON.parse() converts JSON string → JS object
let text = '{"name":"John","age":30,"city":"New York"}';
let obj = JSON.parse(text);
console.log(obj.age); // 30
