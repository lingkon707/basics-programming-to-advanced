class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  deleteUser(user) {
    console.log(`Admin deleted user: ${user.name}`);
  }
}

const u1 = new User("Lingkon");
const admin = new Admin("Rafi");

u1.login();
admin.deleteUser(u1);
