const user = {
  name: "Lingkon",
  greet() {
    console.log(`Hi, ${this.name}`);
  },
};

const greetFn = user.greet;
greetFn(); // undefined (lost context)
greetFn.bind(user)(); // Hi, Lingkon
