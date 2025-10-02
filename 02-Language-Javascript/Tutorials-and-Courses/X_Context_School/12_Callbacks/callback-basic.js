function greetStudent(name, callback) {
  console.log("Hello " + name);
  callback();
}
greetStudent("Ali", ()=>console.log("Good luck for exams!"));
