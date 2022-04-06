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
// console.log(specificId);

const averageScore =
  students.reduce(function (scoresTotal, student) {
    //console.log(student);
    scoresTotal += student.score;
    return scoresTotal;
  }, 0) / students.length;
//console.log(averageScore);

//square bracket notation dynamically adds a property to an object

const subject = 'history';
const total = {};

total[subject] = 'some value';
// console.log(total);

const survey = students.reduce(function (survey, student) {
  //console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject]++;
  } else {
    survey[favSubject] = 1; //if subject same it overwrites
  }
  return survey;
}, {});

console.log(survey);
