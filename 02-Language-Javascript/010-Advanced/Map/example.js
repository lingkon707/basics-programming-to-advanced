const family = [
  { name: "John", gender: "male" },
  { name: "Mary", gender: "female" },
  { name: "Alex", gender: "male" },
  { name: "Linda", gender: "female" }
];

const titledFamily = family.map(member => {
  const title = member.gender === "male" ? "Mr." : "Ms.";
  return `${title} ${member.name}`;
});

console.log(titledFamily);
// Output: ["Mr. John", "Ms. Mary", "Mr. Alex", "Ms. Linda"]
