function marksRange(students, subjectIndex, min, max) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        var m = students[i].marks[subjectIndex];
        if (m >= min && m <= max) {
            result.push(students[i]);
        }
    }
    return result;
}