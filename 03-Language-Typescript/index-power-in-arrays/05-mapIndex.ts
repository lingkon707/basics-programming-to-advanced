const arr: string[] = ["a", "b", "c"];
const result: string[] = arr.map((val, index) => `${index}-${val}`);
console.log(result); // ["0-a", "1-b", "2-c"]
