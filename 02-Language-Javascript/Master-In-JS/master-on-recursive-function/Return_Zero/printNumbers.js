// printNumbers.js
function wallet(tk) {
    if (tk <= 0) return; // stop recursion
    console.log(tk);
    wallet(tk - 1);
}

wallet(5);
