// Simulate audiobook loading using Promise

const loadAudiobook = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Audiobook Loaded");
    }, 1000);
  });
};

loadAudiobook().then(result => console.log(result));