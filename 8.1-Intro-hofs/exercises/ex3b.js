const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const studentGrade = (correctAnswers, studentAnswers) => checkAnswers (correctAnswers, studentAnswers);

const checkAnswers = (gabarito, answers) => {
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

console.log(studentGrade(RIGHT_ANSWERS, STUDENT_ANSWERS));
