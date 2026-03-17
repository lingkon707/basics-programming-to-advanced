var attendance = {};

function markAttendance(name) {
    attendance[name] = true;
    console.log(name + " is present.");
}

markAttendance("Karim");