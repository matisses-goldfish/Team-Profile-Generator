
const Employee = require("../lib/Employee");

test("if our user can create a new employee", () => {
    const testemployee = new Employee( );
    expect(typeof(testemployee)).toBe("object");
})

test("if name and id input works", () => {
    const name = "Honore";
    const id = 74658;
    const email = "honoregn@gmail.com";
    const testemployee = new Employee(name, id, email);
    expect(testemployee.name).toBe(name);
    expect(testemployee.name).toBe(id);
    expect(testemployee.email).toBe(email);
})