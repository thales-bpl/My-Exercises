const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentGrade = (correctAnswers, studentAnswers, action) => action(correctAnswers, studentAnswers);

const checkGrade = (gabarito, answers) => {
  let grade = 0;
  for (let index = 0; index < answers.length; index += 1) {
    if (answers[index] === 'N.A') {
      grade += 0;
    } else if (answers[index] === gabarito[index]) {
      grade += 1;
    } else {
      grade -= 0.5;
    }
  }
  return `Nota ${grade}`;
};

const checkAnswers = (gabarito, answers) => {
  let rightAnswers = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (answers[index] === gabarito[index]) {
      rightAnswers += 1;
    }
  }
  return rightAnswers;
}

console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGrade));
console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
