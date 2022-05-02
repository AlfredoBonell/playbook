const StudentService = require("../../../lib/services/StudentService");
const Reader = require("../../../lib/utils/Reader");
const path = require("path");

describe("Test for StudentService class", () => {

    const jsonPath = path.join(__dirname, "..", "..", "..", "students.json");
    const students = Reader.readJsonFile(jsonPath);

    test("1. filterStudentsWithCertificationEmail()", () => {

        const studentsEmails = StudentService.filterStudentsWithCertificationEmail(students);

        let emailsTest = [];

        students.forEach(student => {
            if(student.haveCertification) 
                emailsTest.push(student.email);
        });

        const resultFilter = studentsEmails.every(email => emailsTest.includes(email));

        expect(resultFilter).toBeTruthy();
    });

    test("2. filterStudentsWithCredits500()", () => {

        const studentsCredits = StudentService.filterStudentsWithCredits500(students);

        const resultFilter = studentsCredits.every(student => student.credits > 500);

        expect(resultFilter).toBeTruthy();
    });
});