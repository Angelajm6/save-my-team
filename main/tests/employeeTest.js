const Employee = require('../lib/employee');
const employee = new Employee('angela', 0717, 'angelajaume.m@gmail.com');

describe ("Employee", () => {
    const mockEmployee = {
        name: "Angela",
        Id: 0717,
        email: "angelajaume.m@gmail.com",
    };
})

describe ("constructor tests", () => {
    test ("should construct a new instance of an employee class", () => {
        expect(employee).toBeInstanceOf(Employee);
    })
})

test ("should construct an instance of an employee class with name, id, email", () => {
    expect(employee).toEqual({
        name: "Angela",
        Id: 0717,
        email: "angelajaume.m@gmail.com",
    });
});


//Should return nbame, id and email when the methods are called
test('creates an employee object', () => {
    expect(employee.name).toBe('angela');
    expect(employee.id).toBe('0717');
    expect(employee.email).toBe('angelajaume.m@gmail.com');
});

// gets name from getName()
test('gets employee name', () => {
    const employee = new Employee('angela', 0717, 'angelajaume.m@gmail.com');

    expect(employee.getName()).toBe('angela');
});

// gets id from getId()
test('gets employee ID', () => {
    const employee = new Employee('angela', 0717, 'angelajaume.m@gmail.com');

    expect(employee.getId()).toBe(0711);
});

// gets email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('angela', 0717, 'angelajaume.m@gmail.com');

    expect(employee.getEmail()).toBe('angelajaume.m@gmail.com');
});

// gets employee role from getRole()
test('gets employee role', () => {
    const employee = new Employee('angela', 0717, 'angelajaume.m@gmail.com');

    expect(employee.getRole()).toBe('employee');
});


