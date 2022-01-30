const readline = require('readline-sync');

const avgSpeed = (distance, time) => distance / time;

const distance = readline.question('Qual foi a distância percorrida na viagem, em metros?');
const time = readline.question('Quanto tempo durou a viagem, em segundos?');

console.log(`Sua velocidade média foi de ${avgSpeed(distance, time)} m/s`);

module.exports = avgSpeed;