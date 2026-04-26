var crudeInput = 100000;
var refinedOutput = 92000;

var waste = crudeInput - refinedOutput;
var efficiency = (refinedOutput / crudeInput) * 100;

console.log("Efficiency:", efficiency);