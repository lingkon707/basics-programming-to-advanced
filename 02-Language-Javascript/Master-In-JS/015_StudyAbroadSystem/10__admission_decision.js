function makeDecision(score, minScore) {
  var admitted = score >= minScore;
  console.log("Admission decision:", admitted ? "Accepted" : "Rejected");
  return admitted;
}