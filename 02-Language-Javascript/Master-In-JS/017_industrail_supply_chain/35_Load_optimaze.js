// 35__load_optimization.js

var containers = [
  { containerId: "C001", maxWeight: 5000, currentWeight: 3500 },
  { containerId: "C002", maxWeight: 4000, currentWeight: 4000 },
  { containerId: "C003", maxWeight: 6000, currentWeight: 2500 }
];

function getAvailableWeight(containerId) {
  for (var i = 0; i < containers.length; i++) {
    if (containers[i].containerId === containerId) {
      return containers[i].maxWeight - containers[i].currentWeight;
    }
  }
  return "Container not found";
}

console.log("C001 available weight:", getAvailableWeight("C001"));