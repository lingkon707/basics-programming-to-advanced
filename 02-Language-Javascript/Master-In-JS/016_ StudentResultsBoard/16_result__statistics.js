function stats(marks) {
    var total = 0, max = marks[0], min = marks[0];
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] > max) max = marks[i];
        if (marks[i] < min) min = marks[i];
    }
    var avg = total / marks.length;
    return {total: total, average: avg, highest: max, lowest: min};
}