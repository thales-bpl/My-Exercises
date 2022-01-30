const readline = require('readline-sync');

const bingo = (guess) => {
  const luckyNumber = Math.floor(Math.random() * 10) + 1;
  if (guess === luckyNumber) return "Parabéns, número correto!"
  else return `Opa, não foi dessa vez. O número era ${luckyNumber}`
};

const userGuess = readline.question('Palpite um número, de 1 a 10! ');

console.log(bingo(userGuess));

module.exports = bingo;
