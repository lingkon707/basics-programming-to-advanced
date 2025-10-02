let result = new Promise((resolve,reject)=>{
  let marks = 85;
  if(marks >= 33) resolve("Passed");
  else reject("Failed");
});
result.then(res => console.log(res)).catch(err => console.log(err));
