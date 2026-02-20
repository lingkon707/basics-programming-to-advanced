var attendance = ["Health", "Defense"];

var required = ["Health", "Education", "Defense"];

for (var i = 0; i < required.length; i++) {
  if (attendance.indexOf(required[i]) === -1) {
    console.log(required[i] + " Ministry Absent!");
  }
}