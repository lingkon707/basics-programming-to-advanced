class Car {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} started`);
  }
}

const car = new Car("Tesla");
car.start();
