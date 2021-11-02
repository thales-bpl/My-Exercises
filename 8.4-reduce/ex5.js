const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const mapper = (acc, cur) => {
  if (cur === 'a' || cur === 'A') return acc + 1;
  return acc;
}

const arrayMapper = (acc, cur) => acc + cur.split('').reduce(mapper, 0);

function containsA(array) {
  return array.reduce(arrayMapper, 0);
}

console.log(containsA(names));
console.log(expectedResult === containsA(names));
