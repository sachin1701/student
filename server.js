const express = require('express');
const bodyParser = require('body-parser');
var routes = require('./app/routes.js');
var studentController = require('./app/controllers/student_controller.js');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//routes(app);


// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.get('/student/:studentId', studentController.findStudentDetailsWithRollNo);
app.get('/students/:studentName', studentController.findStudentDetailsWithStudentName);
app.post('/student', studentController.createStudent);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});