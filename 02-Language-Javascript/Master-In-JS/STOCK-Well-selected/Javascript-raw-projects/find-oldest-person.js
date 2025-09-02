// find-oldest-person.js

// Sample array of villagers with unknown ages
const villagers = [
    { name: "Rahim", age: Math.floor(Math.random() * 100) + 1 },
    { name: "Karim", age: Math.floor(Math.random() * 100) + 1 },
    { name: "Sofia", age: Math.floor(Math.random() * 100) + 1 },
];

// Using map to create an array of ages
const ages = villagers.map(villager => villager.age);
console.log("Ages of villagers:", ages);

// Using find to get the oldest villager
const oldestVillager = villagers.find(villager => villager.age === Math.max(...ages));
console.log("Oldest villager:", oldestVillager);
