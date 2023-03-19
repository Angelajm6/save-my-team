const Manager = require('../lib/manager');
const manager = new Manager('angela', '0717', 'angelajaume.m@gmail.com', '620');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('angela');
    expect(manager.id).toBe('0717');
    expect(manager.email).toBe('angelajaume.m@gmail.com');
    expect(manager.officeNumber).toBe('620');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('angela');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('0717');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('angelajaume.m@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('620');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});