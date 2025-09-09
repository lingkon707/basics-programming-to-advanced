function wallet(tk) {
    if (tk >= 10) {
        console.log(tk); // print the last value
        return;
    }
    console.log(tk);
    wallet(tk + 2); // increase
}

wallet(2);
