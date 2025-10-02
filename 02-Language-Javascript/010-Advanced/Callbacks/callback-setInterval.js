// Example: setInterval callback
let count = 0;
const interval = setInterval(function() {
  console.log("Count:", count);
  count++;
  if(count === 3) clearInterval(interval);
}, 500);
