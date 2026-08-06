function gradeMigration(oldMarks, newMarks) {
    var result = [];
    var subs = ["Math", "Science", "English", "History", "Geo"];
    for (var i = 0; i < oldMarks.length; i++) {
        var diff = newMarks[i] - oldMarks[i];
        var status = "";
        if (diff > 10) status = "Significant Improvement";
        else if (diff > 0) status = "Improved";
        else if (diff === 0) status = "Same";
        else if (diff > -10) status = "Minor Decline";
        else status = "Significant Decline";
        result.push({
            subject: subs[i],
            oldMarks: oldMarks[i],
            newMarks: newMarks[i],
            difference: diff,
            status: status
        });
    }
    return result;
}