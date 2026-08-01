function compareSubjects(marks1, marks2) {
    var result = [];
    var subs = ["Math", "Science", "English", "History", "Geo"];
    for (var i = 0; i < marks1.length; i++) {
        if (marks1[i] > marks2[i]) {
            result.push(subs[i] + ": Student 1");
        } else if (marks1[i] < marks2[i]) {
            result.push(subs[i] + ": Student 2");
        } else {
            result.push(subs[i] + ": Equal");
        }
    }
    return result;
}