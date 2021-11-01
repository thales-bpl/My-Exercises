function arrayDeNumeros(array) {
    let posMaiorNumero = 0;
    for (let index in array) {
        if (array[index] > array[posMaiorNumero]) {
            posMaiorNumero = index;
        }
    }
    return posMaiorNumero
}

console.log(arrayDeNumeros([2, 3, 6, 7, 10, 1]))
