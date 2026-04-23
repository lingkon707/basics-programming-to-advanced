// Patient constructor using ES5
function Patient(id, name, age, gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.admitted = false;
}

Patient.prototype.admit = function () {
    this.admitted = true;
};

Patient.prototype.discharge = function () {
    this.admitted = false;
};

Patient.prototype.getSummary = function () {
    return this.name + " (" + this.age + ") - Admitted: " + this.admitted;
};