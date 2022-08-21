const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "megharpx";
    const employeeInstance = new Engineer("Meghan", 2, "meghaneharper@gmail.com", testGithub);
    expect(employeeInstance).toBe("testGithub");
});

test("Testing getGithub will return github.", () => {
    const testGithub = "megharpx";
    const employeeInstance = new Engineer("Meghan", 2, "meghaneharper@gmail.com", testGithub);
    expect(employeeInstance.name).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Meghan", "meghaneharper@gmail.com", "megharpx");
    expect(employeeInstance.getRole()).toBe(returnValue);
});

