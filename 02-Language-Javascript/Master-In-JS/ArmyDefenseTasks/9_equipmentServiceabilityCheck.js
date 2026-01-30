// 9_equipmentServiceabilityCheck.js

var totalEquipment = 300;
var operationalEquipment = 260;

console.log(
  "EQUIPMENT STATUS → Operational:",
  operationalEquipment,
  "| Faulty:",
  totalEquipment - operationalEquipment,
  "| ALERT:",
  operationalEquipment < 270
    ? "MAINTENANCE ESCALATION REQUIRED"
    : "EQUIPMENT READY"
);