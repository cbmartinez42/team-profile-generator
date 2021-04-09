const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, extraInfo) {
        super(name, id, email);
        this.github = extraInfo;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;

