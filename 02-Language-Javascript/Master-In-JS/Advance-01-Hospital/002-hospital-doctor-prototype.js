function Doctor(id, name, department) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.patients = [];
}

Doctor.prototype.assignPatient = function (patient) {
    this.patients.push(patient);
};

Doctor.prototype.getPatientCount = function () {
    return this.patients.length;
};