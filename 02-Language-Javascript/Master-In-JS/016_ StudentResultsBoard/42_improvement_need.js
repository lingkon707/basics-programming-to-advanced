function improvementNeeded(marks, targetMarks) {
    var subs = ["Math", "Science", "English", "History", "Geo"];
    var improvement = [];
    for (var i = 0; i < marks.length; i++) {
        if (marks[i] < targetMarks) {
            var needed = targetMarks - marks[i];
            improvement.push({
                subject: subs[i],
                current: marks[i],
                needed: needed,
                suggestion: "Need " + needed + " more marks to reach " + targetMarks
            });
        }
    }
    return improvement;
}