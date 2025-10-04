// Find key by value
let scores = { A: 90, B: 80, C: 70 };
let key = Object.keys(scores).find(k => scores[k] === 80);
console.log(key); // "B"
