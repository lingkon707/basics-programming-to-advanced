function validatePassport(passportNumber) {
  var isValid = passportNumber.length >= 8 && passportNumber.length <= 12;
  console.log("Passport valid:", isValid);
  return isValid;
}