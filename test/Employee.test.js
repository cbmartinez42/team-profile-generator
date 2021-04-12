const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should create Employee as an object", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Should set name through constructor arguments", () => {
        const name = "Chris";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Should set id from constructor argument", () => {
        const testValue = 42;
        const e = new Employee("Chris", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Should set email from constructor argument", () => {
        const testValue = "alien@gmail.com";
        const e = new Employee("Chris", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Should return name from getName method", () => {
            const testValue = "Chris";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Should return id from getId method", () => {
            const testValue = 42;
            const e = new Employee("Chris", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Should return email from getEmail method", () => {
            const testValue = "alien@gmail.com";
            const e = new Employee("Chris", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("Should return 'Employee' from getRole method", () => {
            const role = "Employee";
            const e = new Employee("Chris", 42, "alien@gmail.com", role);
            expect(e.getRole()).toBe(role);
        });
    });
})