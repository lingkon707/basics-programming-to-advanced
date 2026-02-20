var buildings = [
  {name: "HQ1", safe: true},
  {name: "HQ2", safe: false}
];

for (var i = 0; i < buildings.length; i++) {
  if (!buildings[i].safe) {
    console.log("Repair Needed:", buildings[i].name);
  }
}