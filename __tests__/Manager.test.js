
const Manager = require("../lib/manager");

test("if our user can create a new Manager", () => {
    const testManager = new Manager( );
    expect(typeof(testManager)).toBe("object");
})

test("if name and id input works", () => {
    const name = "Honore";
    const id = 74658;
    const email = "honoregn@gmail.com";
    const officeNumber = 7382738472;
    const testManager = new Manager(name, id, email, officeNumber);
    expect(testManager.name).toBe(name);
    expect(testManager.name).toBe(id);
    expect(testManager.email).toBe(email);
    expect(testManager.github).toBe(officeNumber);
})