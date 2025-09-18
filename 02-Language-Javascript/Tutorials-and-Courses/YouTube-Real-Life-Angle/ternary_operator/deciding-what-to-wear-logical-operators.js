let raining = true;
let cold = false;

let outfit = raining && cold ? "Wear raincoat and sweater" 
            : raining ? "Wear raincoat" 
            : cold ? "Wear sweater" 
            : "Wear casual clothes";

console.log(outfit);
