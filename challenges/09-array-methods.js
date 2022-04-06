//have access to students from 10-data.js

const updatedStudents = students.map(function (student) {
  //console.log(student);
  student.role = 'student';
  return student;
});

//console.log(updatedStudents);

const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student;
  // }
  //if (student.score >= 80) return student;
  return student.score >= 99;
});

//console.log(highScores);

const specificId = students.find(function (student) {
  return student.id === 1;
});
console.log(specificId);
