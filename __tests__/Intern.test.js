// code based on: https://github.com/JamesLJenks/10_OOP-Team-Profile-Generator

const Intern = require("../lib/intern");

test("if our user can input their school in the command line", () => {
    const testSchool = "University of Texas";
    const testemployee = new Intern("Honore", 74658, "honoregn@gmail.com", testSchool);
    expect(testemployee.school).toBe(testSchool);
});

test("if the user-input for School will return school", () => {
    const testSchool = "University of Texas";
    const testemployee = new Intern("Honore", 74658, "honoregn@gmail.com", testSchool);
    expect(testemployee.getSchool()).toBe(testSchool);
});

test("if the role returns the proper value", () => {
    const returnValue = "Intern";
    const testemployee = new Intern("Honore", 74658, "honoregn@gmail.com", "University of Texas");
    expect(testemployee.getRole()).toBe(returnValue);
});