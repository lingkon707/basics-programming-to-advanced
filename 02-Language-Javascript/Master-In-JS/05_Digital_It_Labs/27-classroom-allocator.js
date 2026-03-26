// classroom allocator

var availableRooms = 5;

function allocateRoom() {
    if (availableRooms > 0) {
        availableRooms--;
        console.log("Classroom allocated.");
    } else {
        console.log("No classroom available.");
    }
}

allocateRoom();