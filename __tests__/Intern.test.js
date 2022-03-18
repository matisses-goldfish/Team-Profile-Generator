
const Intern = require("../lib/intern");

test("if our user can create a new intern", () => {
    const testIntern = new Intern( );
    expect(typeof(testIntern)).toBe("object");
})

test("if name and id input works", () => {
    const name = "Honore";
    const id = 74658;
    const email = "honoregn@gmail.com";
    const school = "University of Texas";
    const testIntern = new Intern(name, id, email, school);
    expect(testIntern.name).toBe(name);
    expect(testIntern.name).toBe(id);
    expect(testIntern.email).toBe(email);
    expect(testIntern.github).toBe(school);
})