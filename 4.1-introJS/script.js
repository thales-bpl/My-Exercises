let num1 = 5;
let num2 = 10;
let num3 = 15;

// Soma
let sum = num1 + num2;
console.log(sum);

//Subtração
let sub = num1 - num2;
console.log(sub);

//Multiplicação
let mult = num1 * num2;
console.log(mult);

//Divisão
let div = num1 / num2;
console.log(div);


//Como saber se é par
let isEven = ((num1 + num2) % 2) === 0;
if (isEven == 'false') {
    console.log('Sou um número ímpar')
} else {
    console.log('Sou um número par')
}

//

let age = 18
if (age == 18) {
    console.log('Carteira provisória')
} else if (age < 18) {
    console.log('Não pode dirigir') 
} else if (age > 18) {
    console.log('Pode dirigir')
}

let age2 = 15
if (age2 > 18) {
    console.log('Pode dirigir');
} else if (age2 < 18) {
    console.log('Você não pode dirigir');
} else {
    console.log('Carteira provisória');
}


// switch--case
let weekDay = 3 ;
switch (weekDay) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;    
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Não existe esse dia!')
}
