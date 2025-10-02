let students = [
  {name:"Ali", marks:80},
  {name:"Sara", marks:90},
  {name:"Rahim", marks:70}
];

for(let student of students){
  console.log(`${student.name} scored ${student.marks}`);
}

for(let i in students){
  console.log(`${students[i].name} -> ${students[i].marks}`);
}
