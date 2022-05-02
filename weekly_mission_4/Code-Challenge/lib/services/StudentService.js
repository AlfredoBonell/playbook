class StudentService {
    static filterStudentsWithCertificationEmail(students) {
        const studentsCertification = students.filter(student => student.haveCertification === true);
        const studentsEmails = studentsCertification.map(student => (student.email));

        return studentsEmails;
    }

    static filterStudentsWithCredits500(students){
        const studentsWithCredits500 = students.filter(student => student.credits > 500);

        return studentsWithCredits500;
    }
}

module.exports = StudentService;
