function trackApplication(student) {
  var steps = ["Registered", "Documents", "Visa", "Admission"];
  var current = steps.indexOf(student.currentStep) + 1;
  console.log("Application progress:", current + "/" + steps.length);
  return current;
}
