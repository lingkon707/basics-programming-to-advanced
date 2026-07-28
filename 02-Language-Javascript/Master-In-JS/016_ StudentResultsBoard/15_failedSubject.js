function failedSubjects(marks) {
    var subs = ["Math", "Science", "English", "History", "Geo"];
    var failed = [];
    for (var i = 0; i < marks.length; i++) {
        if (marks[i] < 40) failed.push(subs[i]);
    }
    return failed;
}