// 29_environmentalWasteAssessment.js
var wasteCollectedKg = 1200;
var recyclingCapacityKg = 1000;

console.log(
  "ENVIRONMENTAL REPORT → Waste:",
  wasteCollectedKg,
  "kg | Capacity:",
  recyclingCapacityKg,
  "kg | STATUS:",
  wasteCollectedKg > recyclingCapacityKg
    ? "RECYCLING OVERLOAD – URGENT ACTION"
    : "SUSTAINABLE"
);