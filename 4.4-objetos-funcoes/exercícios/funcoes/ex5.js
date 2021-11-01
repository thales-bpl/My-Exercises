function numeroMaisComum (numeros) {  
    let contador = 0;
    let contadorMaisComum = 0;
    let indexNumeroMaisComum = 0;
    for (let index = 0; index < numeros.length; index += 1) {
        for (let index2 = 0; index2 < index; index2 += 1) {
            if (numeros[index] === numeros[index2]) {
                contador += 1;
            }
        }
        if (contador > contadorMaisComum) {
            contadorMaisComum = contador;
            indexNumeroMaisComum = index;
        }
        contador = 0;
    }
    return numeros[indexNumeroMaisComum]
}
console.log(numeroMaisComum([2, 3, 2, 5, 8, 2, 3]))