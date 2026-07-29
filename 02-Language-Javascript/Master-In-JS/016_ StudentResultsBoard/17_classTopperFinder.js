function topper(students) {
    var top = students[0];
    var topTotal = 0;
    for (var i = 0; i < students.length; i++) {
        var total = 0;
        for (var j = 0; j < students[i].marks.length; j++) {
            total += students[i].marks[j];
        }
        if (total > topTotal) {
            topTotal = total;
            top = students[i];
        }
    }
    return top;
}