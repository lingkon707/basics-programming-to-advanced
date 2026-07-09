var exchanges = [
    { name: "AlphaX", volume: 500000 },
    { name: "BetaTrade", volume: 800000 }
];

var top = exchanges[0];
for (var i = 1; i < exchanges.length; i++) {
    top = exchanges[i].volume > top.volume ? exchanges[i] : top;
}

console.log("Top Exchange:", top.name);