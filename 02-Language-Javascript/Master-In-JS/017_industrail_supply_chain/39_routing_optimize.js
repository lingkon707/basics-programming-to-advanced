// 39__routing_optimization.js
var routes = [
  { routeId: "R1", from: "WH1", to: "WH2", distance: 120, cost: 150 },
  { routeId: "R2", from: "WH1", to: "WH3", distance: 200, cost: 250 },
  { routeId: "R3", from: "WH2", to: "WH3", distance: 80, cost: 100 }
];

function findCheapestRoute(from, to) {
  var cheapest = null;
  for (var i = 0; i < routes.length; i++) {
    var r = routes[i];
    if (r.from === from && r.to === to) {
      if (cheapest === null || r.cost < cheapest.cost) {
        cheapest = r;
      }
    }
  }
  return cheapest;
}

console.log("Cheapest WH1 to WH3:", findCheapestRoute("WH1", "WH3"));