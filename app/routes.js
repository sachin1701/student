
var studentController = require('./controllers/student_controller.js');

module.exports = (app) => {

    // Retrieve a single Student with studentId
    app.get('/student/:studentId', studentController.findStudentDetailsWithRollNo);
    app.get('/students/:studentName', studentController.findStudentDetailsWithStudentName);
    app.post('/student', studentController.createStudent);   
}