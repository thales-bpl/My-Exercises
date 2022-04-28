const readline = require('readline-sync');

const bingo = (guess) => {
  const luckyNumber = Math.floor(Math.random() * 10) + 1;
  if (guess === luckyNumber) return "Parabéns, número correto!"
  else return `Opa, não foi dessa vez. O número era ${luckyNumber}`
};

const arrayTrue = ['sim', 's', 'yes', 'y']

const main = () => {
  const userGuess = readline.question('Palpite um número, de 1 a 10! ');

  console.log(bingo(userGuess));

  const playAgain = readline.question('Deseja jogar novamente? ');
  if (arrayTrue.some((answer) => answer === playAgain)) main();
}

module.exports = main;

