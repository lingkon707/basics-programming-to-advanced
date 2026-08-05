function creditEarned(marks, credits) {
    var earned = 0;
    for (var i = 0; i < marks.length; i++) {
        if (marks[i] >= 40) {
            earned += credits[i];
        }
    }
    return earned;
}