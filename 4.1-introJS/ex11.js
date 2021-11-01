// Exercício 11
let salarioBruto = Number
salarioBruto = 3000
let aliquotaINSS = Number

if (salarioBruto < 1556.94) {
    aliquotaINSS = salarioBruto * 0.08
} else if (salarioBruto >= 1556.94 && salarioBruto < 2594.92) {
    aliquotaINSS = salarioBruto * 0.09
} else if (salarioBruto >= 1556.93 && salarioBruto < 5189.82) {
    aliquotaINSS = salarioBruto * 0.11
} else {
    aliquotaINSS = 570.88
}

let salarioINSS = salarioBruto - aliquotaINSS

let aliquotaIR = Number
let parcelaIR = Number

if (salarioINSS <= 1903.98) {
    aliquotaIR = 0;
    parcelaIR = 0;
} else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    aliquotaIR = 0.075
    parcelaIR = 142.80
} else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
    aliquotaIR = 0.15
    parcelaIR = 354.80
} else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
    aliquotaIR = 0.225
    parcelaIR = 636.13
} else if (salarioINSS > 4664.68) {
    aliquotaIR = 0.275
    parcelaIR = 869.36
}

let aliquotaIRCalc = salarioINSS * aliquotaIR
let IRTotal = aliquotaIRCalc - parcelaIR
let salarioLiquido = salarioINSS - IRTotal
console.log(salarioLiquido)