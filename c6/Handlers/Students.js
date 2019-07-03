var getAllStudents = (req, res) => {
    res.send('Hello from /students');

};
var getStudentById = (req,res) =>{
    res.send('Get single student with id: ' + req.params.id);

};

var GetStudentSubjectGrades = (req, res) =>{
    res.send(' Student with id ' + req.params.id + ' grades for subject: ' + req.params.sub);

};
module.exports = {
    getAllStudents,
    getStudentById,
    GetStudentSubjectGrades
};      

