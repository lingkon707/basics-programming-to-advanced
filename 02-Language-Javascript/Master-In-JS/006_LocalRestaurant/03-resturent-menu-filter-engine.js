function getAvailableMenu(menu) {
  var available = [];

  for (var i = 0; i < menu.length; i++) {
    if (menu[i].available === true) {
      available.push(menu[i]);
    }
  }
  return available;
}

var menu = [
  { item: "Biryani", available: true },
  { item: "Burger", available: false }
];

console.log(getAvailableMenu(menu));