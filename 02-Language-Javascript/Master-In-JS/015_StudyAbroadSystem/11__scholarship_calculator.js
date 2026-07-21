function calculateScholarship(gpa) {
  var amount = gpa >= 3.8 ? 10000 : gpa >= 3.5 ? 5000 : gpa >= 3.0 ? 2000 : 0;
  console.log("Scholarship amount:", amount);
  return amount;
}