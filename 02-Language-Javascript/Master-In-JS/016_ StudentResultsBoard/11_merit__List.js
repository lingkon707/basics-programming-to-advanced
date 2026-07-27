function meritList(students) {
    var list = [];
    for (var i = 0; i < students.length; i++) {
        var total = 0;
        for (var j = 0; j < students[i].marks.length; j++) {
            total += students[i].marks[j];
        }
        list.push({name: students[i].name, total: total});
    }
    for (var i = 0; i < list.length - 1; i++) {
        for (var j = 0; j < list.length - i - 1; j++) {
            if (list[j].total < list[j+1].total) {
                var temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    return list;
}