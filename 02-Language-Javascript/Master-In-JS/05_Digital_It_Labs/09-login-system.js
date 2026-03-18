function login(username, password) {
    if (username === "admin" && password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

login("admin", "1234");