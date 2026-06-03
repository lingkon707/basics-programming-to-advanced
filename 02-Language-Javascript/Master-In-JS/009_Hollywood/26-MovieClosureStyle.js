function movie(name) {
  return function() {
    console.log("Movie:", name);
  };
}

movie("Titanic")();