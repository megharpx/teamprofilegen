const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "M";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = "" ;
    const employeeInstance = new Employee("Meghan", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "meghaneharper@gmail.com";
    const employeeInstance = new Employee("Meghan", 1, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Meghan";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 1;
    const employeeInstance = new Employee("Meghan", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "mmeghaneharper@gmail.com";
    const employeeInstance = new Employee("Meghan", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Meghan", 2, "mmeghaneharper@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})