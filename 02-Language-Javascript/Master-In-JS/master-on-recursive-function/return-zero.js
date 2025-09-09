function test(n) {
    if (n <= 0) {
        return 0; // stop recursion here
    }
    console.log(n);
    return test(n - 1);
}

test(3);
