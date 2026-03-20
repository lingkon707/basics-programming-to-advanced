var totalSeats = 30;
var occupiedSeats = 22;

function availableSeats() {
    return totalSeats - occupiedSeats;
}

console.log(availableSeats());