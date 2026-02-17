var ministries = [
  {name: "Health", budget: 500000},
  {name: "Education", budget: 700000},
  {name: "Defense", budget: 900000}
];

var total = 0;
for (var i = 0; i < ministries.length; i++) {
  total += ministries[i].budget;
}
console.log("Total Ministry Budget:", total);