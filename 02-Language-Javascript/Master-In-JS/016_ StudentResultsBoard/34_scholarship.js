function scholarshipEligible(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    var per = (total / 500) * 100;
    if (per >= 90) return "Full Scholarship";
    if (per >= 80) return "Half Scholarship";
    if (per >= 70) return "25% Scholarship";
    return "Not Eligible";
}