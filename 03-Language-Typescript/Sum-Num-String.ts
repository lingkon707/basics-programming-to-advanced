// number sum
let personList: { roll: number } = {
  roll: 1,
};

console.log(personList.roll + 1);

// string + Number sum
let personAge: { age: string } = {
  age: "2",
};

console.log(Number(personAge.age) + 2);

// mix
let personData: { boyos: number | string } = {
  boyos: "8", // could also be number
};

console.log(personData.boyos); // 4 is string

let personDatax: { tell: number } = {
  tell: 12345687890, // 0 not work, a number
};

console.log(String(personDatax.tell)); // outputs: "1234"





