var officers = [
  {name: "Rafiq", clearance: "High"},
  {name: "Jamal", clearance: "Low"}
];

for (var i = 0; i < officers.length; i++) {
  if (officers[i].clearance === "High") {
    console.log(officers[i].name + " can access confidential files");
  }
}