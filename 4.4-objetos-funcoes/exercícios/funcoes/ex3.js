function menorValor (array) {
    posMenorValor = 0
    for (let index in array) {
        if (array[index] < array[posMenorValor]) {
            posMenorValor = index;
        }
    }
    return posMenorValor
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))