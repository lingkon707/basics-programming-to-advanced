let start = Date.now();
setTimeout(() => {
  let end = Date.now();
  console.log(`⌨️ Typing speed: ${(60 / ((end - start) / 1000)).toFixed(1)} words per minute (simulated)`);
}, 3000);
