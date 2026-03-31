var studentProfile = {
    name: "Rahim",
    phone: "017XXXXXXXX"
};

function updatePhone(newPhone) {
    studentProfile.phone = newPhone;
}

updatePhone("018XXXXXXXX");
console.log(studentProfile);