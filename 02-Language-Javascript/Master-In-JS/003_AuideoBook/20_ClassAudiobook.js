// Audiobook class

class Audiobook {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  play() {
    console.log(`Playing ${this.title}`);
  }
}

const book = new Audiobook("ES6 Audio", 180);
book.play();