// Ternary Operator
// Syntax: 'x ? y : z'
// 'binary statement' ? 'return if true' : 'return if false'
// x = statement that will be checked if true or false. This statement has to be binary (outputs a boolean)
// y = operator return if the statement is true
// z = operator return if the statement is false

//Ex 1:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression) // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression) // isso é mentira

// -------------------- // -------------------- //
// When to use Ternaries?
// Ternaries are best used as substitutes of an if/else that has two outputs.
// Here's a textbook example:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);

// Here's an example of a bad use of ternary as replacement of an if/else:
const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// We shouldn't use nested ternaries. Altough possible, it polutes the code, making it harder for other people and your future self to read it. Thus, nested ternaries kills the purpose of an operator which is suppose to make the code cleaner and tidier.
