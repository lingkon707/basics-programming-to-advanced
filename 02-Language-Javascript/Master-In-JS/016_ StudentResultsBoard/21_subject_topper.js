function subjectTopper(students, subjectIndex) {
    var top = students[0];
    for (var i = 1; i < students.length; i++) {
        if (students[i].marks[subjectIndex] > top.marks[subjectIndex]) {
            top = students[i];
        }
    }
    return top;
}