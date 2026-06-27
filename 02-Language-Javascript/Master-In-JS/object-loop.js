// object-loop.js


var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

for (var key in car) {
  console.log(key + ":", car[key]);
}