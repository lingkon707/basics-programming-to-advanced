function calculateGrade(score) {
    if (score >= 80) return "A";
    if (score >= 60) return "B";
    return "Fail";
}

console.log(calculateGrade(75));