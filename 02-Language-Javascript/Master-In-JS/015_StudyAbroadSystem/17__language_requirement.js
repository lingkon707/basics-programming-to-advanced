function checkLanguageRequirement(test, score) {
  var minScore = test === "IELTS" ? 6.5 : test === "TOEFL" ? 80 : 0;
  var passed = score >= minScore;
  console.log("Language requirement met:", passed);
  return passed;
}