// function-return-object.js

function createUser(name, role) {
  return {
    name: name,
    role: role
  };
}

console.log(createUser("Karim", "Editor"));