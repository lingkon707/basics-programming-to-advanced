function grade(marks) {
  if (marks >= 80) return "A+";
  if (marks >= 70) return "A";
  if (marks >= 60) return "A-";
  return "B or below";
}
console.log("🎯 Grade:", grade(78));
