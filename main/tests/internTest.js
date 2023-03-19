const Intern = require('../lib/intern');
const intern = new Intern('angela', '0717', 'angelajaume.m@gmail.com', 'New York');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('angela');
    expect(intern.id).toBe('0717');
    expect(intern.email).toBe('angelajaume.m@gmail.com');
    expect(intern.school).toBe('New York');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('angela');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('0717');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('angelajaume.m@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('New York');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});