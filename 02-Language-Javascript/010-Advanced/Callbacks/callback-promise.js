// Example: Callback inside Promise
function asyncTask(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback("Task done!");
      resolve();
    }, 1000);
  });
}
asyncTask(msg => console.log(msg));
