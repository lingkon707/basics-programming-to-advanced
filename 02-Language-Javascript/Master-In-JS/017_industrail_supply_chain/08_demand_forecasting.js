// 08__demand_forecasting.js
var historicalDemand = [120, 135, 110, 150, 130, 160];

function calculateMovingAverage(data, windowSize) {
  var sum = 0;
  var start = data.length - windowSize;
  for (var i = start; i < data.length; i++) {
    sum += data[i];
  }
  return sum / windowSize;
}

var forecast = calculateMovingAverage(historicalDemand, 3);
console.log("Forecasted demand (3-month avg):", forecast);