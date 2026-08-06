function semesterProgress(marks) {
    var progress = [];
    var subs = ["Math", "Science", "English", "History", "Geo"];
    for (var i = 0; i < marks.length; i++) {
        var status = "";
        if (marks[i] >= 90) status = "Excellent";
        else if (marks[i] >= 75) status = "Good";
        else if (marks[i] >= 60) status = "Average";
        else if (marks[i] >= 40) status = "Needs Improvement";
        else status = "Failing";
        progress.push({
            subject: subs[i],
            marks: marks[i],
            status: status,
            suggestion: marks[i] < 60 ? "Need more practice" : "Keep it up"
        });
    }
    return progress;
}