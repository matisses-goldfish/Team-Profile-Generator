
const Engineer = require("../lib/engineer");

test("if our user can create a new engineer", () => {
    const testEngineer = new Engineer( );
    expect(typeof(testEngineer)).toBe("object");
})

test("if name and id input works", () => {
    const name = "Honore";
    const id = 74658;
    const email = "honoregn@gmail.com";
    const github = "matisses-goldfish";
    const testEngineer = new Engineer(name, id, email, github);
    expect(testEngineer.name).toBe(name);
    expect(testEngineer.name).toBe(id);
    expect(testEngineer.email).toBe(email);
    expect(testEngineer.github).toBe(github);
})