var staff = [
  {name: "Ali", exp: 6},
  {name: "Babu", exp: 3}
];

for (var i = 0; i < staff.length; i++) {
  if (staff[i].exp >= 5) {
    console.log(staff[i].name + " Promoted");
  }
}