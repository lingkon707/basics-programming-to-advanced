// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

let p1 = new Person("Alice", 22);
p1.greet();
