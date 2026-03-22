var students = ["Rahim", "Karim", "Salam"];

function searchStudent(name) {
    return students.indexOf(name) !== -1;
}

console.log(searchStudent("Karim"));