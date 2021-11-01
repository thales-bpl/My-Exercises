const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (gabarito, answers) => {
  return (gabarito === answers) ? true : false;
}

const studentGrade = (gabaritoArray, answersArray, action) => {
let grade = 0;
  for (let index = 0; index < gabaritoArray.length; index += 1) {
    if (answersArray[index] === 'N.A') {
      grade += 0
    } else if (action(gabaritoArray[index], answersArray[index])) {
      grade += 1;
    } else {
      grade -= 0.5
    }
  }
  return `Nota ${grade}`;
}

console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));