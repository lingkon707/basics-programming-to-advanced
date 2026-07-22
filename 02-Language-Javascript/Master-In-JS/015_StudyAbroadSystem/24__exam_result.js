function calculateGrade(score, maxScore) {
  var percentage = (score / maxScore) * 100;
  var grade = percentage >= 80 ? "A" : percentage >= 60 ? "B" : "C";
  console.log("Grade:", grade);
  return grade;
}