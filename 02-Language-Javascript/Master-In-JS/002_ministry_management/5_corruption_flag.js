var audit = [
  {ministry: "Transport", issue: true},
  {ministry: "Agriculture", issue: false}
];

for (var i = 0; i < audit.length; i++) {
  if (audit[i].issue) {
    console.log("ALERT: Corruption found in " + audit[i].ministry);
  }
}