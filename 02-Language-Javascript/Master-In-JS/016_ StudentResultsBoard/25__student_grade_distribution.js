function gradeDistribution(students) {
    var grades = {A: 0, B: 0, C: 0, D: 0, F: 0};
    for (var i = 0; i < students.length; i++) {
        var total = 0;
        for (var j = 0; j < students[i].marks.length; j++) {
            total += students[i].marks[j];
        }
        var per = (total / 500) * 100;
        if (per >= 80) grades.A++;
        else if (per >= 60) grades.B++;
        else if (per >= 50) grades.C++;
        else if (per >= 40) grades.D++;
        else grades.F++;
    }
    return grades;
}