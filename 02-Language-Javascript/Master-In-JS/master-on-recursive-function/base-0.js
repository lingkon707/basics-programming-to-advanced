function wallet(tk) {
    if (tk <= 0) {
        return 0; // stop recursion
    }
    console.log(tk);
    wallet(tk - 2);
}

wallet(5);
