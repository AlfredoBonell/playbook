const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "Code Challenge Api welcome!" });
});

app.get("/v1/students", (request, response) => {
    const students = StudentsController.getStudents();
    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const students = StudentsController.getStudentsEmails();
    response.json(students);
});

app.get("/v1/students/credits", (request, response) => {
    const students = StudentsController.getStudentsCredits();
    response.json(students);
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});

