const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Should create Engineer as an object", () => {
        const e = new Engineer();
        expect(typeof(e)).toBe("object");
    });

    describe("getGithub", () => {
        it("Should return input for github from method", () => {
            const github = "cbmartinez42";
            const e = new Engineer("Chris", 42, "alien@gmail.com", github);
            expect(e.getGithub()).toBe(github);
        });
    });
    describe("getRole", () => {
        it("Should return 'Engineer' from getRole method", () => {
            const testValue = "Engineer";
            const e = new Engineer("Chris", 42, "alien@gmail.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
});