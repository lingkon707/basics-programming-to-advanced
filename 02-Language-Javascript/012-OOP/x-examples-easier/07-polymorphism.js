class Bird {
  speak() {
    console.log("Chirp Chirp");
  }
}

class Parrot extends Bird {
  speak() {
    console.log("I can talk like humans!");
  }
}

const b1 = new Bird();
const b2 = new Parrot();
b1.speak();
b2.speak();
