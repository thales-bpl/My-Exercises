// Exercício 1
let a = Number
let b = Number
a= 31
b=554

let soma = a + b
console.log(soma)

let subtração = a - b
console.log(subtração)

let multiplicação = a * b
console.log(multiplicação)

let divisão = a / b
console.log(divisão)

let módulo = a % b
console.log(módulo)


// Exercício 2
let n1 = Number
let n2 = Number

n1=4
n2=8

if (n1>n2) {
    console.log(n1)
} else {
    console.log(n2)
}


// Exercício 3
let m1 = Number
let m2 = Number
let m3 = Number
m1=14
m2=8
m3=9

if (m1 > m2 && m1 > m3) {
    console.log(m1)
} else if (m2 > m1 && m2 > m3) {
    console.log(m2)
} else {
    console.log(m3)
}


// Exercício 4
let x = Number
x=0

if (x < 0) {
    console.log('negative')
} else if (x==0) {
    console.log('zero')
} else {
    console.log('positive')
}


//Exercícios 5
let t1 = Number
let t2 = Number
let t3 = Number
let tcheck = Boolean
t1=30
t2=90
t3=60

if (t1 < 0 || t2 < 0 || t3 < 0) {
    tcheck = false;
} else if (t1 + t2 + t3 == 180) {
    tcheck = true;
} else {
    tcheck = false;
}

if (tcheck == true)
    console.log('Triângulo válido')
else {
    console.log('Erro ao plotar o triângulo')
}


// Exercício 6
// Insira o nome da peça na linha abaixo:
let chessp = String
chessp = "Bispo"
let lowchessp = chessp.toLowerCase()

switch (lowchessp) {
    case 'peão':
        console.log('1 casa à frente: vertical ou diagonal')
        break;
    case 'torre':
        console.log('Sem limite de casas: horizontal ou vertical')
        break;
    case 'cavalo':
        console.log('1 casa na horizontal e 2 na vertical ou vice-versa')
        break;
    case 'bispo':
        console.log('Sem limite de casas: diagonal')
        break;
    case 'rainha':
        console.log('Sem limite de casas: horizontal, vertical e diagonal')
        break;
    case 'rei':
        console.log('1 casa: horizontal, vertical e diagonal')
        break;
    default:
        console.log('erro')
}  


// Exercício 7
let nota = Number
nota = 101

if (nota >= 90 && nota <= 100) {
    console.log('Você recebeu um A')
} else if (nota >= 80 && nota <= 100) {
    console.log('Você recebeu um B')
} else if (nota >= 70 && nota <= 100) {
    console.log('Você recebeu um C')
} else if (nota >= 60 && nota <= 100) {
    console.log('Você recebeu um D')
} else if (nota >= 50 && nota <= 100) {
    console.log('Você recebeu um E')
} else if (nota < 50 && nota >= 0) {
    console.log('Você recebeu um F')
} else {
    console.log('Erro')
}

/* switch (nota) {
    case nota >= 90:
        console.log('Você recebeu um A')
        break;
    case nota >= 80:
        console.log('Você recebeu um B')
        break;
    case nota >= 70:
        console.log('Você recebeu um C')
        break;
    case nota >= 60:
        console.log('Você recebeu um D')
        break;
    case nota >= 50:
        console.log('Você recebeu um E')
        break;
    case nota < 50:
        console.log('Você recebeu um F')
        break;
    default:
        console.log('erro')
} */


// Exercício 8
let p1 = Number
let p2 = Number
let p3 = Number
let ppp = Boolean
p1 = 3
p2 = 4
p3 = 7

let pp1 = p1 % 2
let pp2 = p2 % 2
let pp3 = p3 % 2

if (pp1 == 0 || pp2 == 0 || pp3 == 0) {
    ppp = true
} else {
    ppp = false
}
console.log(ppp)


// Exercício 9
let q1 = Number
let q2 = Number
let q3 = Number
let qqq = Boolean
q1 = 2
q2 = 5
q3 = 6

let qq1 = q1 % 2
let qq2 = q2 % 2
let qq3 = q3 % 2

if (qq1 !== 0 || qq2 !== 0 || qq3 !== 0) {
    qqq = true
} else {
    qqq = false
}
console.log(qqq)


// Exercício 10
let cp = Number
let vv = Number
let imposto = Number
imposto = 0.2
cp = 20
vv = 80
let ct = cp + cp * (imposto)
let lucro = vv - ct
let lucroTotal = lucro * 1000

if (vv > 0 || cp > 0) {
    console.log(lucroTotal)
} else {
    console.log('Erro. Encerrando programa(??)')
}


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