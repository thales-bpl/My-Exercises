const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const text = saudacoes[0];
const print = saudacoes[1];
print(text); // Olá
