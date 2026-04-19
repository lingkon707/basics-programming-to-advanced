var resturent = {
  id: 101,
  info: {
    name: "City Biryani",
    area: "Kaliganj",
    halal: true
  },
  menu: [
    { item: "Chicken Biryani", price: 180, available: true },
    { item: "Beef Kacchi", price: 250, available: false }
  ],
  rating: {
    totalStars: 45,
    totalUsers: 10
  }
};

console.log(resturent.info.name);