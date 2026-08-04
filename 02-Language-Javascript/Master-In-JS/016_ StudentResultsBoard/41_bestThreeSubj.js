function bestThreeSubjects(marks) {
    var subs = ["Math", "Science", "English", "History", "Geo"];
    var combined = [];
    for (var i = 0; i < marks.length; i++) {
        combined.push({subject: subs[i], marks: marks[i]});
    }
    for (var i = 0; i < combined.length - 1; i++) {
        for (var j = 0; j < combined.length - i - 1; j++) {
            if (combined[j].marks < combined[j+1].marks) {
                var temp = combined[j];
                combined[j] = combined[j+1];
                combined[j+1] = temp;
            }
        }
    }
    var best = [];
    for (var i = 0; i < 3 && i < combined.length; i++) {
        best.push(combined[i]);
    }
    return best;
}