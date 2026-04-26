var capacity = 600000;
var stored = 465000;

var usagePercent = (stored / capacity) * 100;

var freeSpace = capacity - stored;

console.log("Usage %:", usagePercent);