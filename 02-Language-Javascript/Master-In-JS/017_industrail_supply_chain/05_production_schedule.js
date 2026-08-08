// 05__production_scheduling.js

var workOrders = [
  { id: 101, product: "Widget", qty: 500, daysRequired: 3 },
  { id: 102, product: "Gadget", qty: 300, daysRequired: 2 },
  { id: 103, product: "Thingy", qty: 200, daysRequired: 4 }
];

function calculateProductionLoad() {
  var totalDays = 0;
  for (var i = 0; i < workOrders.length; i++) {
    totalDays += workOrders[i].daysRequired;
  }
  return "Total production days required: " + totalDays;
}

console.log(calculateProductionLoad());