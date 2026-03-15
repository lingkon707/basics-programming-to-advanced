var username = "admin";
var password = "12345";

function login(user, pass) {
    if (user === username && pass === password) {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}

login("admin", "12345");