const teamPlayers = ["Rakib", "Shanto", "Siam", "Naim"];
const query = "shanto";

const found = teamPlayers.find(p => p.toLowerCase() === query.toLowerCase());
console.log(found ? `${found} is in the squad.` : "Player not found.");
