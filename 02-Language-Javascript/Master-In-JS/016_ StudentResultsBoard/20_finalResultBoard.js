function resultBoard(students) {
    var board = "===== FINAL RESULT BOARD =====\n";
    board += "Name\t\tTotal\tGrade\tStatus\n";
    board += "--------------------------------\n";
    for (var i = 0; i < students.length; i++) {
        var total = 0;
        for (var j = 0; j < students[i].marks.length; j++) {
            total += students[i].marks[j];
        }
        var per = (total / 500) * 100;
        var grade = per >= 90 ? "A+" : per >= 80 ? "A" : per >= 70 ? "B" : per >= 60 ? "C" : per >= 50 ? "D" : "F";
        var status = passFail(students[i].marks);
        board += students[i].name + "\t\t" + total + "\t" + grade + "\t" + status + "\n";
    }
    return board;
}