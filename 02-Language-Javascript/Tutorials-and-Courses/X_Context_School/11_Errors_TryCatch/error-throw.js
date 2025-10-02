function checkMarks(marks) {
  if(marks < 0) throw "Invalid marks!";
  return marks;
}
console.log(checkMarks(85));
// console.log(checkMarks(-5)); // would throw error
