// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Limão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mamão', 'Uva', 'Pera'];

const fruitSalad = (fruit, additional) => {
  let newArray = [...fruit, ...additional];
  return newArray;
};

console.log(fruitSalad(specialFruit, additionalItens));