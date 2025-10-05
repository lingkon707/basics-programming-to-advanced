class Animal {
  eat() {
    console.log("Animal is eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking!");
  }
}

const d = new Dog();
d.eat();
d.bark();
