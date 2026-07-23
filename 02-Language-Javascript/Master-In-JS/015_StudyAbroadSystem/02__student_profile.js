function updateProfile(student, field, value) {
  student[field] = value;
  console.log("Profile updated:", student);
  return student;
}