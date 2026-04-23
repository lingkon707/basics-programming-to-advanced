function Department(name) {
    var doctors = []; // private via closure

    return {
        addDoctor: function (doctor) {
            doctors.push(doctor);
        },
        listDoctors: function () {
            return doctors.slice();
        },
        totalDoctors: function () {
            return doctors.length;
        }
    };
}