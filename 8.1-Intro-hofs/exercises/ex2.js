const results = (bet, action) => {
  const randomNumber = Math.ceil(Math.random() * 5);
  return action (bet, randomNumber);
}

const checkResults = (bet, result) => (bet === result) ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(results (4, checkResults));
