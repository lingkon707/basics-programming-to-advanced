let squad = [];

function addPlayer(player) {
  squad.push(player);
  console.log(`${player.name} added to the team.`);
}

addPlayer({ name: "Naim Islam", position: "Goalkeeper" });
addPlayer({ name: "Tushar Ali", position: "Defender" });

console.table(squad);
