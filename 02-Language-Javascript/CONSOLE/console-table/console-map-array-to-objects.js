const people = ["Ali", "Sara", "John"];
const mappedPeople = people.map((name, index) => ({ ID: index + 1, Name: name }));
console.table(mappedPeople);
