var prices = [32000, 33000, 31000, 34500];

var highest = prices[0];
for (var i = 1; i < prices.length; i++) {
    highest = prices[i] > highest ? prices[i] : highest;
}

console.log("Highest Price:", highest);