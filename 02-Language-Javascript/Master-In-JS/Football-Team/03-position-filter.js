const team = [
  { name: "Rakib", position: "Forward" },
  { name: "Siam", position: "Defender" },
  { name: "Shanto", position: "Midfielder" },
];

const forwards = team.filter(p => p.position === "Forward");
console.log("Forward Players:", forwards);
