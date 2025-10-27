function pomodoro(work, rest) {
  console.log(`🍅 Start ${work} mins study`);
  setTimeout(() => {
    console.log(`☕ Break ${rest} mins`);
  }, work * 60000);
}
pomodoro(25, 5);
