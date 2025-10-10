let foods: string[] = ["rice", "fish", "meat"];
const indexToReplace: number = foods.indexOf("fish");

if (indexToReplace !== -1) {
  foods[indexToReplace] = "chicken";
}
console.log(foods); // ["rice", "chicken", "meat"]
