function yearPerformance(termMarks) {
    // termMarks is array of marks from different terms
    var totals = [];
    for (var i = 0; i < termMarks.length; i++) {
        var total = 0;
        for (var j = 0; j < termMarks[i].length; j++) {
            total += termMarks[i][j];
        }
        totals.push((total / (termMarks[i].length * 100)) * 100);
    }
    var annual = 0;
    for (var i = 0; i < totals.length; i++) {
        annual += totals[i];
    }
    annual = annual / totals.length;
    return {termPercentages: totals, annualPercentage: annual};
}