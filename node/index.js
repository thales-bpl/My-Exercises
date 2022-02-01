const readline = require('readline-sync');
const imcMain = require('./imc');
const avgSpeed = require('./velocidade');
const bingo = require('./sorteio');

const scriptCatalog = (answer) => {
  if (answer === '1') return imcMain();
  if (answer === '2') return `Sua velocidade média foi de ${avgSpeed()} m/s`;
  if (answer === '3') return bingo();
}

console.log(`Nosso catálogo de scripts:
  Digite 1 para calcular seu IMC 
  Digite 2 para calcular Velocidade Média 
  Digite 3 para sorteio`
);

const scripts = readline.question('Qual dos scripts você gostaria de rodar? ')

scriptCatalog(scripts);