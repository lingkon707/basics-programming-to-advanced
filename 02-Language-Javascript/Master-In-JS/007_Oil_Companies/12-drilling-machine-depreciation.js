var machineCost = 2400000;
var years = 8;

var depreciation = machineCost / years;
var valueAfter3Years = machineCost - (depreciation * 3);

console.log("Current Value:", valueAfter3Years);