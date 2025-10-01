const car = { brand: "Toyota", model: "Corolla", year: 2020 };
console.table(Object.entries(car).map(([key, value]) => ({ Key: key, Value: value })));
