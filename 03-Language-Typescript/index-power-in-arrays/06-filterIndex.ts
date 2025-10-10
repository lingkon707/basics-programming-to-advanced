const data: string[] = ["x", "y", "z", "w", "q"];
const evenIndexItems: string[] = data.filter((_, index) => index % 2 === 0);
console.log(evenIndexItems); // ["x", "z", "q"]
