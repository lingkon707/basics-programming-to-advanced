const animal = {
  eat() {
    console.log("Animal eats food.");
  },
};

const cat = Object.create(animal);
cat.eat();
