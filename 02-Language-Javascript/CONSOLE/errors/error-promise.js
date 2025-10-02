// Example: Promise rejection
const p = new Promise((resolve, reject) => {
  reject("Promise rejected!");
});
p.catch(err => console.log("Promise error:", err));
