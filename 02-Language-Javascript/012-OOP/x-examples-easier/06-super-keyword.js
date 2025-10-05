class Vehicle {
  constructor(name) {
    this.name = name;
  }
}

class Bike extends Vehicle {
  constructor(name, price) {
    super(name);
    this.price = price;
  }
}

const bike = new Bike("Yamaha", 120000);
console.log(bike.name, bike.price);
