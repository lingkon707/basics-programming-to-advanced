// -delay-penalty.js

var delayHours = 6;

var penalty = delayHours > 4 ? delayHours * 200 : 0;

console.log("Delay Penalty:", penalty);