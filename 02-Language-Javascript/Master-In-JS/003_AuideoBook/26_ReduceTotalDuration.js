// Calculate total duration using reduce

const durations = [100, 200, 150];

const total = durations.reduce((sum, time) => sum + time, 0);

console.log("Total Duration:", total);