// Mouse and Keyboard Inventory


var peripherals = {
  mouse: 25,
  keyboard: 22
};


for (var item in peripherals) {
  console.log(item + ":", peripherals[item]);
}