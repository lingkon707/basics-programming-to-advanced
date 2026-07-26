function lowest(marks) {
    var min = marks[0];
    var sub = 0;
    var subs = ["Math", "Science", "English", "History", "Geo"];
    for (var i = 1; i < marks.length; i++) {
        if (marks[i] < min) {
            min = marks[i];
            sub = i;
        }
    }
    return {marks: min, subject: subs[sub]};
}