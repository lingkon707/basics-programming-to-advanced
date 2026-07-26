function subjectResult(marks) {
    var subs = ["Math", "Science", "English", "History", "Geo"];
    var result = "";
    for (var i = 0; i < marks.length; i++) {
        result += subs[i] + ": " + marks[i] + " - " + (marks[i] >= 40 ? "PASS" : "FAIL") + "\n";
    }
    return result;
}