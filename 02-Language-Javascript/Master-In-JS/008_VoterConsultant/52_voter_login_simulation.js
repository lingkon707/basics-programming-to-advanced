var voterDB = [
    { nid: "NID101", pin: "1234" },
    { nid: "NID102", pin: "5678" }
];

function login(nid, pin) {
    for (var i = 0; i < voterDB.length; i++) {
        if (voterDB[i].nid === nid && voterDB[i].pin === pin) {
            return "Login Successful";
        }
    }
    return "Login Failed";
}

console.log(login("NID101", "1234"));