class Animal {
  constructor(type) {
    this.type = type;
  }
  showType() {
    console.log(`This is a ${this.type}`);
  }
}

const dog = new Animal("Dog");
dog.showType();
