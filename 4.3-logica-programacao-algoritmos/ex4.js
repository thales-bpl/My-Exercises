/* Padrão da pirâmide: No ponto mais alto da pirâmide, (alturaMax), temos apenas um (*) posicionado exatamente no meio da pirâmide. Com isso, temos que no ponto mais alto da pirâmide, o único (*) presente na linha1 estará a uma distância exatamente igual à (alturaMax) do início da linha. Nesse caso alturaMax = 3, então a primeira linha terá apenas um (*) como terceiro caractere.
  *
 ***
*****
A partir daí podemos notar que em cada andar subsequente, devemos desenhar mais um (*) à esquerda e um (*) à direita, além daqueles sempre presentes no meio. O padrão se repete até a base.
*/
let n = 5
let alturaMax = ( n + 1 ) / 2;

for (let indexAltura = 0; indexAltura < alturaMax; indexAltura += 1) {
    let resultado = '';
    for (let posLinha = 1; posLinha <= n; posLinha += 1) {
        if (posLinha <= (alturaMax + indexAltura) && posLinha >= (alturaMax - indexAltura)) {
            resultado += '*';
        } else {
            resultado += ' ';
        }
    }
    console.log(resultado)
}
