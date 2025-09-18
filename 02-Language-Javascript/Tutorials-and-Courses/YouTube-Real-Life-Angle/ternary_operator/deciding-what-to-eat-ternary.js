let hungry = true;
let pizzaAvailable = false;

let meal = hungry 
    ? pizzaAvailable 
        ? "Eat pizza!" 
        : "Order something else." 
    : "No need to eat now.";

console.log(meal);
