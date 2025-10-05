class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;
  }
}

const user = new User("Lingkon");
console.log(user.name);
user.name = "Rafi";
console.log(user.name);
