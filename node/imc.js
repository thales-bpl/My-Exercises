const readline = require('readline-sync');

const imcResult = (weight, heigth) => {
  const imc = weight / (heigth * heigth);
  if (imc < 18.5) return `IMC: ${imc}. Status: Abaixo do peso (magreza)`
  if (imc < 24.9) return `IMC: ${imc}. Status: Peso normal`
  if (imc < 29.9) return `IMC: ${imc}. Status: Acima do peso (sobrepeso)`
  if (imc < 34.9) return `IMC: ${imc}. Status: Obesidade grau I`
  if (imc < 39.9) return `IMC: ${imc}. Status: Obesidade grau II`
  if (imc > 40) return `IMC: ${imc}. Status: Obesidade grau III ou IV`
}

const main = () => {
  const weight = readline.question('Quanto você pesa em kilos?')
  const heigth = readline.questionFloat('Qual sua altura em metros?')
  
  console.log(imcResult(weight, heigth));
}

module.exports = main;
