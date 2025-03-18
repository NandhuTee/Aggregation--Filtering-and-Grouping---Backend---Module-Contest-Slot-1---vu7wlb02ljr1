const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // Field 1: Define a property for 'name' with a String data type and required true
  // Field 2: Define a property for 'age' with a Number data type and required true
  // Field 3: Define a property for 'score' with a Number data type and required true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
