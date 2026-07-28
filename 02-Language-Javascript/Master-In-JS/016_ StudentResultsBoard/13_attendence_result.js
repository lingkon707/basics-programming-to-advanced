function attendanceResult(present, total) {
    var per = (present / total) * 100;
    var status = per >= 75 ? "Eligible" : "Not Eligible";
    return "Attendance: " + per.toFixed(2) + "% - " + status;
}