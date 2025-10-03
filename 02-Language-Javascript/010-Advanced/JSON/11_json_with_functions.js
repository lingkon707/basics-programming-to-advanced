// Functions are not allowed in JSON
let obj = { name: "Tom", greet: function() { return "Hi"; } };
console.log(obj.greet()); // Works in JS

let json = JSON.stringify(obj);
console.log(json); // {"name":"Tom"} (function removed!)
