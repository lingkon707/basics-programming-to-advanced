// 25_counterSalesRanking.js
var counters = [
  ["Stall A", 150000],
  ["Stall B", 210000],
  ["Stall C", 180000]
];

var top = counters[0];

for (var i = 1; i < counters.length; i++) {
  if (counters[i][1] > top[1]) {
    top = counters[i];
  }
}

console.log("TOP SELLING STALL →", top[0], "| Revenue:", top[1]);