const StudentService = require("../services/StudentService");
const Reader = require("../utils/Reader");

class StudentsController {
    static getStudents() {
        return Reader.readJsonFile("students.json");
    }

    static getStudentsEmails(){
        const studentsJson = Reader.readJsonFile("students.json");
        const studentsEmails = StudentService.filterStudentsWithCertificationEmail(studentsJson);
        return studentsEmails;
    }
    
    static getStudentsCredits(){
        const studentsJson = Reader.readJsonFile("students.json");
        const studentsCredits = StudentService.filterStudentsWithCredits500(studentsJson);

        return studentsCredits;
    }
}

module.exports = StudentsController;
