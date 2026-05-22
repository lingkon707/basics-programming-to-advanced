var queue = [];

function addToQueue(name) {
    queue.push(name);
}

function serveNext() {
    return queue.shift();
}

addToQueue("Rahim");
addToQueue("Karim");
console.log(serveNext());