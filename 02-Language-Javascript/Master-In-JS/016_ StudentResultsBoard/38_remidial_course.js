function remedialCourse(marks) {
    var subs = ["Math", "Science", "English", "History", "Geo"];
    var need = [];
    for (var i = 0; i < marks.length; i++) {
        if (marks[i] < 35) {
            need.push(subs[i]);
        }
    }
    return need;
}