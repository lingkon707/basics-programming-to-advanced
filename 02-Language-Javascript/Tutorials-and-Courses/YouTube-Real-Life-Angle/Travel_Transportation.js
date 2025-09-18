Catch train (ternary)

let onTime = true;
console.log(onTime ? "Catch the train" : "Take next train");


Flight status (switch)

let flight = "delayed";
switch(flight){
    case "on time": console.log("Go to airport"); break;
    case "delayed": console.log("Wait at home"); break;
    default: console.log("Check online");
}


Car condition (if-else)

let carWorking = false;
if(carWorking) console.log("Drive to work");
else console.log("Use taxi");


Traffic light (switch)

let signal = "red";
switch(signal){
    case "green": console.log("Go"); break;
    case "yellow": console.log("Slow down"); break;
    case "red": console.log("Stop"); break;
}


Travel packing (logical operator)

let passport = true;
let ticket = false;
console.log(passport && ticket ? "Travel ready" : "Cannot travel");


Taxi or bus (ternary)

let money = 20;
let taxiFare = 15;
console.log(money >= taxiFare ? "Take taxi" : "Take bus");


Check fuel (if-else)

let fuel = 5;
if(fuel < 10) console.log("Refuel car");
else console.log("Drive normally");


Choose route (switch)

let route = "short";
switch(route){
    case "short": console.log("Take highway"); break;
    case "scenic": console.log("Take countryside road"); break;
}


Bike or walk (logical operator)

let distance = 3; // km
let weatherGood = true;
console.log(distance < 5 && weatherGood ? "Walk" : "Take bike");


Travel companion (array)

let companions = ["Friend1", "Friend2"];
companions.forEach(c => console.log("Travel with " + c));