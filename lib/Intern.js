const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, extraInfo) {
        super(name, id, email);
        this.school = extraInfo;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;

