function scoreConverter(marks, type) {
    var result = [];
    for (var i = 0; i < marks.length; i++) {
        if (type === "percent") {
            result.push((marks[i] / 100) * 100);
        } else if (type === "grade") {
            if (marks[i] >= 90) result.push("A+");
            else if (marks[i] >= 80) result.push("A");
            else if (marks[i] >= 70) result.push("B");
            else if (marks[i] >= 60) result.push("C");
            else if (marks[i] >= 50) result.push("D");
            else result.push("F");
        }
    }
    return result;
}