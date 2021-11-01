// Ex 1:
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Ex 2:
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

for (let index = 1; index < oddsAndEvens.length; index += 1) {
  for (let index2 = 0; index2 < oddsAndEvens.length; index2 += 1) {
    if (oddsAndEvens[index] < oddsAndEvens[index2]) {
      let aux = oddsAndEvens[index2];
      oddsAndEvens[index2] = oddsAndEvens[index];
      oddsAndEvens[index] = aux
    }
  }
}

console.log(`Os números ${oddsAndEvens} se encontram de forma crescente`);

// Outra forma de resolver:

let oddsAndEvens = [13, 3, 4, 10, 7, 2];
function compareNumbers(a, b) {
  return a - b;
}
oddsAndEvens.sort(compareNumbers);
console.log(`Os números ${oddsAndEvens} se encontram de forma crescente`);

