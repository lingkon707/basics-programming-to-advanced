// 22__dock_scheduling.js
var dockSlots = [
  { dockId: "D1", scheduledTime: "08:00", carrier: "FedEx", duration: 2 },
  { dockId: "D2", scheduledTime: "09:30", carrier: "UPS", duration: 3 },
  { dockId: "D1", scheduledTime: "10:00", carrier: "DHL", duration: 2 }
];

function getDockUtilization(dockId) {
  var totalHours = 0;
  for (var i = 0; i < dockSlots.length; i++) {
    if (dockSlots[i].dockId === dockId) {
      totalHours += dockSlots[i].duration;
    }
  }
  return "Dock " + dockId + " utilized: " + totalHours + " hours";
}

console.log(getDockUtilization("D1"));