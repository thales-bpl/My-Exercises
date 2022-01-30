const readline = require('readline-sync');
/* const imc = require('./imc');
const avgSpeed = require('./velocidade');
const bingo = require('./sorteio'); */

console.log(`Nosso catálogo de scripts:
  Digite 1 para calcular seu IMC 
  Digite 2 para calcular Velocidade Média 
  Digite 3 para sorteio`
);

const scripts = readline.question('Qual dos scripts você gostaria de rodar? ')

const scriptCatalog = (answer) => {
  if (answer === 1) return 'option 1'
  if (answer === 2) return 'option 2'
  if (answer === 3) return 'option 3'
}

console.log(scriptCatalog(scripts));
scriptCatalog(scripts);