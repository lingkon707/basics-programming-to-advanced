// 03__warehouse_capacity.js

var warehouses = [
  { name: "Chicago", capacity: 10000, used: 7500 },
  { name: "Dallas", capacity: 8000, used: 8000 },
  { name: "Atlanta", capacity: 12000, used: 6000 }
];

function getAvailableSpace() {
  var totalAvailable = 0;
  for (var i = 0; i < warehouses.length; i++) {
    var avail = warehouses[i].capacity - warehouses[i].used;
    totalAvailable += avail;
    console.log(warehouses[i].name + ": " + avail + " sq ft available");
  }
  return "Total available: " + totalAvailable;
}

console.log(getAvailableSpace());