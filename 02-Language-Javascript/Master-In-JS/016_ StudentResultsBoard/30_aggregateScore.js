function aggregateScore(students) {
    var total = 0, count = 0;
    for (var i = 0; i < students.length; i++) {
        for (var j = 0; j < students[i].marks.length; j++) {
            total += students[i].marks[j];
            count++;
        }
    }
    return total / count;
}