function createOrder(resturentName) {
  var total = 0;

  return {
    addItem: function (price) {
      total += price;
    },
    getTotal: function () {
      return resturentName + " Total: " + total;
    }
  };
}

var order = createOrder("City Biryani");
order.addItem(180);
order.addItem(120);

console.log(order.getTotal());