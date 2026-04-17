// Student Helpline Call Counter

var calls = 0;

function receiveCall() {
  calls++;
}

receiveCall();
receiveCall();

console.log("Total calls:", calls);