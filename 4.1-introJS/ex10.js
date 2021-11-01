// Exercício 10
let custoProducao = Number
let valorVenda = Number
let imposto = Number
let vendas = Number
imposto = 0.2
custoProducao = 20
valorVenda = 80
vendas = 1000

let custoTotal = custoProducao + custoProducao * (imposto)
let lucroUn = valorVenda - custoTotal
let lucroTotal = lucroUn * vendas

if (valorVenda > 0 || custoProducao > 0) {
    console.log(lucroTotal)
} else {
    console.log('Erro. Encerrando programa(??)')
}
