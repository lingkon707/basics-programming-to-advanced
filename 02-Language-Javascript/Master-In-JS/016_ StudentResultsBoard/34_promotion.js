function promotionStatus(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] < 40) return "NOT PROMOTED";
    }
    var per = (total / 500) * 100;
    if (per >= 40) return "PROMOTED";
    return "NOT PROMOTED";
}