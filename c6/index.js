var express = require('express');
var api = express();
var students = require('./Handlers/Students');
var calculator = require('./Handlers/calculator');

api.get('/students', students.getAllStudents);
api.get('/students/:id', students.getStudentById);
api.get('students/:id/grades/:sub', students.GetStudentSubjectGrades);

api.get('/calc/:op/:a/:b', calculator.Calculator);

api.listen(8080, (err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server started successfully');
    
});
