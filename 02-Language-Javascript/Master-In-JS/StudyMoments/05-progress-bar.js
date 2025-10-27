let progress = 0;
let timer = setInterval(() => {
  progress += 10;
  console.log(`Progress: [${"█".repeat(progress/10)}${" ".repeat(10-progress/10)}] ${progress}%`);
  if (progress === 100) clearInterval(timer);
}, 1000);
