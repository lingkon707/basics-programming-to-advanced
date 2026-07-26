function highest(marks) {
    var max = marks[0];
    var sub = 0;
    var subs = ["Math", "Science", "English", "History", "Geo"];
    for (var i = 1; i < marks.length; i++) {
        if (marks[i] > max) {
            max = marks[i];
            sub = i;
        }
    }
    return {marks: max, subject: subs[sub]};
}