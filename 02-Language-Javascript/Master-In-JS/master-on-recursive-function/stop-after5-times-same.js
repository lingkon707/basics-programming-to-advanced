function wallet(count) {
    console.log(1);  // always print 1

    if (count === 5) {
        return;      // stop after printing 5 times
    }

    wallet(count + 1);  // increase counter
}

wallet(1);
