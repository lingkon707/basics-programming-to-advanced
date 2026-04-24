var dailyOutput = 42000;
var days = 30;
var maintenanceLoss = 0.06;

var gross = dailyOutput * days;
var loss = gross * maintenanceLoss;
var finalOutput = gross - loss;

console.log("Final Output:", finalOutput);