let n = 7;
let meio = (n + 1) / 2;

for (let altura = 0; altura < meio; altura += 1) {
    let resultado = '';
    for (let posLinha = 1; posLinha <= n; posLinha += 1) {
        if (posLinha === (meio + altura) || posLinha === (meio - altura) || altura === (meio - 1)) {
            resultado += '*';
        } else {
            resultado += ' ';
        }  
    }
    console.log(resultado);
}
