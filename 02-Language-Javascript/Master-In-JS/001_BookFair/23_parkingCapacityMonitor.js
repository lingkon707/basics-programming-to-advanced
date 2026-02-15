// 23_parkingCapacityMonitor.js
var parkingCapacity = 300;
var vehiclesParked = 325;

console.log(
  "PARKING CONTROL → Capacity:",
  parkingCapacity,
  "| Occupied:",
  vehiclesParked,
  "| STATUS:",
  vehiclesParked > parkingCapacity
    ? "OVERFLOW – TRAFFIC DIVERSION REQUIRED"
    : "WITHIN LIMIT"
);