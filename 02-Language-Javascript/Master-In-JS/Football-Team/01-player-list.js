const players = [
  { id: 1, name: "Rakib Hossain", position: "Forward" },
  { id: 2, name: "Shanto Rahman", position: "Midfielder" },
  { id: 3, name: "Siam Ahmed", position: "Defender" },
];

players.forEach(p => {
  console.log(`${p.name} - ${p.position}`);
});
