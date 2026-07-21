function registerStudent(name, email, password) {
  var student = { name: name, email: email, password: password, registered: true };
  console.log("Student registered:", student);
  return student;
}