function Resturent(name, area) {
  this.name = name;
  this.area = area;
}

Resturent.prototype.describe = function () {
  return this.name + " located in " + this.area;
};

var r1 = new Resturent("Food Garden", "Kaliganj");
console.log(r1.describe());