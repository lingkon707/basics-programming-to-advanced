function suggestFood(menu, budget) {
  var result = [];

  for (var i = 0; i < menu.length; i++) {
    if (menu[i].price <= budget && menu[i].available) {
      result.push(menu[i].item);
    }
  }
  return result;
}

console.log(
  suggestFood(
    [
      { item: "Biryani", price: 180, available: true },
      { item: "Kacchi", price: 260, available: true }
    ],
    200
  )
);