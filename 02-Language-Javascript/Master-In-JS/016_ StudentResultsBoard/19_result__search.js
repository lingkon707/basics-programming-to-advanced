function searchStudent(name, students) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === name.toLowerCase()) {
            return students[i];
        }
    }
    return null;
}