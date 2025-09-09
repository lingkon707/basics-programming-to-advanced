function wallet(tk) {
    if (tk >= 5) {
        console.log(tk); // print 5 and stop
        return;
    }
    console.log(tk);
    wallet(tk + 2); // increase by 2
}

wallet(1);
