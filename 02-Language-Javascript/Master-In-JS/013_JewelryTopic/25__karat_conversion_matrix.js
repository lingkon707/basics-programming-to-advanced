var karats = [18, 21, 22, 24];
var pureRatios = [];

for (var i = 0; i < karats.length; i++) {
  pureRatios.push((karats[i] / 24).toFixed(3));
}

console.log("Karat Purity Matrix:", pureRatios);