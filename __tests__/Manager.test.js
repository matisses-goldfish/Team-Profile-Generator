// code based on: https://github.com/JamesLJenks/10_OOP-Team-Profile-Generator
const Manager = require("../lib/manager");

test("if our user can create an office number", () => {
    const testOfficeNumber = 7384758347;
    const testEmployee = new Manager("Honore", 74658, "honoregn@gmail.com", testOfficeNumber);
    expect(testEmployee.officeNumber).toBe(testOfficeNumber);
});

test("if the user-input officeNumber will return office number", () => {
    const testOfficeNumber = 7384758347;
    const testEmployee = new Manager("Honore", 74658, "honoregn@gmail.com", testOfficeNumber);
    expect(testEmployee.getOfficeNumber()).toBe(testOfficeNumber);
});

test("if the role returns the proper value", () => {
    const returnValue = "Manager";
    const testEmployee = new Manager("Honore", 74658, "honoregn@gmail.com", 7384758347);
    expect(testEmployee.getRole()).toBe(returnValue);
});