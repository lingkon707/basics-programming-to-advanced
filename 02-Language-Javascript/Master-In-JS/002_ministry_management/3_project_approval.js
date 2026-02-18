var projects = [
  {title: "Road Dev", cost: 200000},
  {title: "Hospital Build", cost: 800000}
];

for (var i = 0; i < projects.length; i++) {
  if (projects[i].cost <= 500000) {
    console.log(projects[i].title + " Approved");
  } else {
    console.log(projects[i].title + " Rejected (Over Budget)");
  }
}