var ratings = [5, 9, 6];

for (var i = 0; i < ratings.length; i++) {
  if (ratings[i] < 6) continue;
  console.log("Good:", ratings[i]);
}