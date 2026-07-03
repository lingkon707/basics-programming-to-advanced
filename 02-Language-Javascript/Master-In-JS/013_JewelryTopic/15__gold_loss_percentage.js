var rawGold = 50; // gm
var finalGold = 48.6;

var loss = rawGold - finalGold;
var lossPercent = (loss / rawGold) * 100;

console.log("Gold Loss:", lossPercent.toFixed(2) + "%");