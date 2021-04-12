const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Should create Manager as an object", () => {
        const e = new Manager();
        expect(typeof(e)).toBe("object");
    });

    describe("getOfficeNumber", () => {
        it("Should return input for officeNumber from method", () => {
            const officeNumber = "555-555-5555";
            const e = new Manager("Chris", 42, "alien@gmail.com", officeNumber);
            expect(e.getOfficeNumber()).toBe(officeNumber);
        });
    });
    describe("getRole", () => {
        it("Should return 'Manager' from getRole method", () => {
            const testValue = "Manager";
            const e = new Manager("Chris", 42, "alien@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});