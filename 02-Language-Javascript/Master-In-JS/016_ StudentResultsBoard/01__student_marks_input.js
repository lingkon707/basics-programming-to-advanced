function getMarks() {
    var name = prompt("Enter name:");
    var marks = [];
    for (var i = 0; i < 5; i++) {
        var m = parseFloat(prompt("Subject " + (i+1) + " marks:"));
        marks.push(m);
    }
    return {name: name, marks: marks};
}