function summary(name, marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) total += marks[i];
    var per = (total / 500) * 100;
    var grade = per >= 90 ? "A+" : per >= 80 ? "A" : per >= 70 ? "B" : per >= 60 ? "C" : per >= 50 ? "D" : "F";
    var status = passFail(marks);
    return "Name: " + name + "\nTotal: " + total + "\nPercentage: " + per.toFixed(2) + "%\nGrade: " + grade + "\nStatus: " + status;
}