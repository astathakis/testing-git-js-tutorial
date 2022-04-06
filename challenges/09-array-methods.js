//have access to students from 10-data.js

const updatedStudents = students.map(function (student) {
  //console.log(student);
  student.role = 'student';
  return student;
});

console.log(updatedStudents);
