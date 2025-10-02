function getMarks(callback){
  setTimeout(() => callback([80,90,70]), 1000);
}
getMarks(marks => console.log("Marks:", marks));
