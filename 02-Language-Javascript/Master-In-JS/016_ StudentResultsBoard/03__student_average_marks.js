function avgMarks(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;
}