function timeSlot(hour) {

    if (hour < 12) return "Morning Slot";
    return "Afternoon Slot";
}

console.log(timeSlot(10));