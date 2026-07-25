function passFail(marks) {
    for (var i = 0; i < marks.length; i++) {
        if (marks[i] < 40) return "FAIL";
    }
    return "PASS";
}