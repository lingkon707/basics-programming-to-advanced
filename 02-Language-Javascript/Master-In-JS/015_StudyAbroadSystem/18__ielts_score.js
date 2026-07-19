function validateIELTS(scores) {
  var overall = scores.reduce(function(a, b) { return a + b; }, 0) / scores.length;
  var valid = overall >= 6.0;
  console.log("IELTS overall:", overall, "Valid:", valid);
  return valid;
}