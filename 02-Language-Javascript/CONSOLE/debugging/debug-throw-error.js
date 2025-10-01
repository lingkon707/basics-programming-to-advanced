function checkNumber(n) {
  if (n < 0) throw new Error("Negative number not allowed");
}
try {
  checkNumber(-5);
} catch(e) {
  console.error(e.message);
}
