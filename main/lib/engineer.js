// It imports the employee parent class 
const Employee = require('./Employee');

// The Engineer class extends the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
       
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;