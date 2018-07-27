const Student = require('../models/student_model.js');

exports.createStudent = (req, res) => {

    console.log("create student called", req.body);
    // Validate request
    if(!req.body.student_name || !req.body.student_roll_no) {
        return res.status(400).send({
            message: "Student content can not be empty"
        });
    }

    // Create a Student
    const student = new Student({
        name: req.body.student_name,
        class: req.body.student_class,
        roll_no : req.body.student_roll_no,
        class_teacher: req.body.student_class_teacher 
    });

    // Save Student in the database
    student.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    });
};


// Find a single student with a studentRollno
exports.findStudentDetailsWithRollNo = (req, res) => {
	Student.find({roll_no : req.params.studentId})
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with roll no" + req.params.studentId
            });            
        }
        res.send(student);
    }).catch(err => {
            return res.status(500).send({
            message: "Error retrieving student with roll no" + req.params.studentId
        });
    });

};


// Find a single student with a studentName
exports.findStudentDetailsWithStudentName = (req, res) => {
    Student.find({name : req.params.studentName})
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with name " + req.params.studentName
            });            
        }
        res.send(student);
    }).catch(err => {
            return res.status(500).send({
            message: "Error retrieving student with name " + req.params.studentName
        });
    });

};

