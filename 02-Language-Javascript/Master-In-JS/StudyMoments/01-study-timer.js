let start = Date.now();
setTimeout(() => {
  let seconds = Math.floor((Date.now() - start) / 1000);
  console.log(`📚 You studied for ${seconds} seconds!`);
}, 5000);
