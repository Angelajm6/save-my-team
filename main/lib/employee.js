class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName method retrieves the user inputted name for our employee class
    getName() {
        return this.name;
    }

    // getId method retrieves the user inputted id for our employee class
    getId() {
        return this.id;
    }

    // getEmail method retrieves the user inputted email for our employee class
    getEmail() {
        return this.email;
    }

    // getRole method retrieved the user inputted email for our employee class
    getRole() {
        return "Employee";
    }
}

// It exports employee so it can be accessed by its role class and generate the HTML file
module.exports = Employee;