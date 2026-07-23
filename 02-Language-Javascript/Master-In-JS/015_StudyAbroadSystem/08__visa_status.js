function checkVisaStatus(student) {
  var status = student.visaApplied ? "Processing" : "Not Applied";
  console.log("Visa status:", status);
  return status;
}
