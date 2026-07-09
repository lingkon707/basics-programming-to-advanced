var volumes = [120000, 90000, 150000];

var total = 0;
for (var i = 0; i < volumes.length; i++) {
    total += volumes[i];
}

console.log("Daily Volume:", total);