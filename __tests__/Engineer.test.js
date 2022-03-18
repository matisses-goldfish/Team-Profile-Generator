// code based on: https://github.com/JamesLJenks/10_OOP-Team-Profile-Generator

const Engineer = require("../lib/engineer");

test("is user can establish their github", () => {
    const testGithub = "matisses-goldfish";
    const testemployee = new Engineer("Honore", 74658, "honoregn@gmail.com", testGithub);
    expect(testemployee.github).toBe(testGithub);
});

test("if the user-input github will return github", () => {
    const testGithub = "matisses-goldfish";
    const testemployee = new Engineer("Honore", 74658, "honoregn@gmail.com", testGithub);
    expect(testemployee.getGithub()).toBe(testGithub);
});

test("if the role returns the proper value", () => {
    const returnValue = "Engineer";
    const testemployee = new Engineer("Honore", 74658, "honoregn@gmail.com", "matisses-goldfish");
    expect(testemployee.getRole()).toBe(returnValue);
});
