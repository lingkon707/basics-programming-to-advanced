async function getMarks(){
  let marks = await Promise.resolve([80,90,70]);
  console.log("Marks:", marks);
}
getMarks();
