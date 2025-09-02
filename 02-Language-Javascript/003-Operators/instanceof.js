// Friend object constructor
function Friend(name, age) {
    this.name = name;
    this.age = age;
}

let friend1 = new Friend("Sami", 16);

console.log(friend1 instanceof Friend); // true
console.log(friend1 instanceof Array);  // false


// typeof → Quick check of primitive type (string, number, boolean).
// instanceof → Check object type or class instance.