var maxSeats = 25;
var enrolledStudents = 20;

function isSeatAvailable() {
    return enrolledStudents < maxSeats;
}

console.log(isSeatAvailable());