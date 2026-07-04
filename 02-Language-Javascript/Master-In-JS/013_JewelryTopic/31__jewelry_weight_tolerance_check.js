var expected = 14.5;
var actual = 14.38;
var tolerance = 0.15;

var deviation = Math.abs(expected - actual);

console.log("Within Tolerance:", deviation <= tolerance);