function academicStanding(marks) {
    var total = 0;
    var failed = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] < 40) failed++;
    }
    var per = (total / (marks.length * 100)) * 100;
    if (failed === 0 && per >= 85) return "Honors";
    if (failed === 0 && per >= 60) return "Good Standing";
    if (failed === 0 && per >= 40) return "Satisfactory";
    if (failed <= 1) return "Probation";
    return "Academic Dismissal";
}