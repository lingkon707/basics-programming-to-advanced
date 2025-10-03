// Dates are not JSON data types
let person = { name: "Mila", birth: new Date("2000-05-15") };
let str = JSON.stringify(person);
console.log(str); // {"name":"Mila","birth":"2000-05-15T00:00:00.000Z"}
