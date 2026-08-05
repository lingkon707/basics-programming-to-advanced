function compareWithClass(studentMarks, classAverage) {
    var total = 0;
    for (var i = 0; i < studentMarks.length; i++) {
        total += studentMarks[i];
    }
    var studentAvg = total / studentMarks.length;
    var diff = studentAvg - classAverage;
    if (diff > 5) return "Above Average";
    if (diff >= -5 && diff <= 5) return "Average";
    return "Below Average";
}