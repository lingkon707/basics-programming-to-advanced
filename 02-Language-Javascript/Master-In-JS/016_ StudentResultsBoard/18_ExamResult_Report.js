function report(students) {
    var report = "";
    for (var i = 0; i < students.length; i++) {
        var total = 0;
        for (var j = 0; j < students[i].marks.length; j++) {
            total += students[i].marks[j];
        }
        var per = (total / 500) * 100;
        report += students[i].name + ": " + total + " (" + per.toFixed(2) + "%)\n";
    }
    return report;
}