let people = [
  { name: "Rokeya", gender: "female", age: 62 },
  { name: "Rahim", gender: "male", age: 65 },
  { name: "Sara", gender: "female", age: 45 },
  { name: "Kamal", gender: "male", age: 58 }
];

for (let person of people) {
  if (person.age >= 60 && person.gender.toLowerCase() === "female") {
    console.log(person.name + ": Senior female citizen, eligible for special benefits.");
  } else if (person.age >= 60 && person.gender.toLowerCase() === "male") {
    console.log(person.name + ": Senior male citizen, eligible for senior benefits.");
  } else {
    console.log(person.name + ": Not eligible for senior benefits yet.");
  }
}