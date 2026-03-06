// Use default parameter for narrator

function createAudiobook(title, narrator = "Unknown") {
  console.log(title, narrator);
}

createAudiobook("JavaScript Audio");