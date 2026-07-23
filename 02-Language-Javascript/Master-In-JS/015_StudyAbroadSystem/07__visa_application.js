function applyForVisa(student, visaType) {
  student.visaApplied = true;
  student.visaType = visaType;
  console.log("Visa application submitted for:", student.name);
  return student;
}
