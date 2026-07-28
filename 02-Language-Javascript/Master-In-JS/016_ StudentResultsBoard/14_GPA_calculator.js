function gpa(marks) {
    var totalGPA = 0;
    for (var i = 0; i < marks.length; i++) {
        if (marks[i] >= 90) totalGPA += 5.0;
        else if (marks[i] >= 80) totalGPA += 4.0;
        else if (marks[i] >= 70) totalGPA += 3.0;
        else if (marks[i] >= 60) totalGPA += 2.0;
        else if (marks[i] >= 50) totalGPA += 1.0;
        else totalGPA += 0.0;
    }
    return totalGPA / marks.length;
}