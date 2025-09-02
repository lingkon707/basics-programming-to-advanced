// array__ join
const myArray = ["Amar", "gramer", "name", "Nageshwari"];
const madeAString = myArray.join(" ");
console.log(madeAString); // Amar gramer name Nageshwari

// random
const myNumber = Math.random();
console.log("Random number from village fair:", myNumber);

// this with person
const person = {
    firstName: "Lingkon",
    lastName: "Islam",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Village Person:", person.fullName());

// this with car
const car = {
    brand: "Rickshaw",
    start: function () {
        console.log(`Starting ${this.brand} ride from my village road.`);
    }
};

car.start();
