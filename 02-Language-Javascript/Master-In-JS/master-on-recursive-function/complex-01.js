
// If you want it to print five times 50:

// You need to start the counter at 1 and stop at 5:

function wallet(count) {
    console.log(50);  

    if (count === 5) {
        return;    
    }

    wallet(count + 1);  
}

wallet(1);  // start from 1
