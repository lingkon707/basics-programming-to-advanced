// Adding number of mangoes collected each day in the village
let totalMangoes = 0;
let day = 0;

do {
  totalMangoes = totalMangoes + day;
  console.log(`Day ${day + 1}: Total mangoes collected = ${totalMangoes}`);
  day++;
} while (day < 10); // Repeat for 10 days
