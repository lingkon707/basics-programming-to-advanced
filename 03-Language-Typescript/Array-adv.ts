// Declare an array of numbers
let numbers1: number[] = [1, 2, 3, 4, 5];
let numbers2: number[] = [10, 20, 30, 40, 50];
let numbers3: number[] = [71, 75, 85, 88, 98];


for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

//  for...of loop
for (let num of numbers2) {
    console.log(num);
}

//  forEach method
numbers3.forEach((num2) => {
    console.log(num2);
});