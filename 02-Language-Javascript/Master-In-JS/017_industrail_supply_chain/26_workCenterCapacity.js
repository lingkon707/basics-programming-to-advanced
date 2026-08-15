// 26__work_center_capacity.js
var workCenters = [
  { centerId: "WC1", maxCapacity: 100, currentLoad: 75 },
  { centerId: "WC2", maxCapacity: 80, currentLoad: 80 },
  { centerId: "WC3", maxCapacity: 120, currentLoad: 60 }
];

function getAvailableCapacity(centerId) {
  for (var i = 0; i < workCenters.length; i++) {
    if (workCenters[i].centerId === centerId) {
      return workCenters[i].maxCapacity - workCenters[i].currentLoad;
    }
  }
  return "Center not found";
}

console.log("WC1 available capacity:", getAvailableCapacity("WC1"));