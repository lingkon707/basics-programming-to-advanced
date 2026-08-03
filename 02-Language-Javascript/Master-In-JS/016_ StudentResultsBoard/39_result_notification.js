function resultNotification(name, marks) {
    var status = passFail(marks);
    var total = 0;
    for (var i = 0; i < marks.length; i++) total += marks[i];
    var per = (total / 500) * 100;
    var message = "Dear " + name + ",\n";
    message += "Your result is " + status + ".\n";
    message += "Percentage: " + per.toFixed(2) + "%\n";
    if (status === "PASS") {
        message += "Congratulations! Keep it up!";
    } else {
        message += "Please work harder next time.";
    }
    return message;
}