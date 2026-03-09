// Async/Await example

async function startAudiobook() {
  const result = await loadAudiobook();
  console.log(result);
}

startAudiobook();