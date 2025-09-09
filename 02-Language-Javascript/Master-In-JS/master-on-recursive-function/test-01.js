function wallet(tk) {
    if (tk >= 10) {
        return 10; // stop recursion and return 10
    }
    console.log(tk);
    return wallet(tk + 2); // return the value from deeper recursion
}

let result = wallet(2);
console.log("Result:", result);
