// Nested JSON
let user = {
  "id": 1,
  "profile": {
    "username": "admin",
    "email": "admin@mail.com"
  }
};
console.log(user.profile.email); // admin@mail.com
