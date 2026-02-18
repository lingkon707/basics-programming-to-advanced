var staff = {
  Health: 200,
  Education: 350,
  Defense: 500
};

for (var key in staff) {
  console.log(key + " Ministry Staff:", staff[key]);
}