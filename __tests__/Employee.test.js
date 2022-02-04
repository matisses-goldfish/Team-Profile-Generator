// code based on: https://github.com/JamesLJenks/10_OOP-Team-Profile-Generator

const Employee = require("../lib/Employee");

test("if our user can create a new employee", () => {
    const testemployee = new Employee();
    expect(typeof(testemployee)).toBe("object");
})

test("if name input works", () => {
    const name = "Honore";
    const testemployee = new Employee(name);
    expect(testemployee.name).toBe(name);
})

test("if id input works", () => {
    const id = 74658;
    const testemployee = new Employee("Honore", id);
    expect(testemployee.id).toBe(id);
})

test("if email input works", () => {
    const email = "honoregn@gmail.com";
    const testemployee = new Employee("Honore", 74658, email);
    expect(testemployee.email).toBe(email);
})



test("if code fetchs name through getName method.", () => {
    const testName = "Honore";
    const testemployee = new Employee(testName);
    expect(testemployee.getName()).toBe(testName);
})

test("if code fetchs ID through getId method.", () => {
    const testID = 74658;
    const testemployee = new Employee("Honore", testID);
    expect(testemployee.getId()).toBe(testID);
})

test("if code fetchs email through getEmail method.", () => {
    const testEmail = "honoregn@gmail.com";
    const testemployee = new Employee("Honore", 74658, testEmail);
    expect(testemployee.getEmail()).toBe(testEmail);
})

test("if role works", () => {
    const returnValue = "Employee";
    const testemployee = new Employee("Honore", 74658, "honoregn@gmail.com");
    expect(testemployee.getRole()).toBe(returnValue);
})