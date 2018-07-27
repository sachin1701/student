var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: {type :String},
    class: {type :String},
    roll_no : {type :String},
    class_teacher: {type :String} 
}, {
     collection : 'student'
});

module.exports = mongoose.model('student', StudentSchema);