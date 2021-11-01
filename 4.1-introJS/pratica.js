// Parte 2
const name = "Carolina"
const birthCity = 'Rio de Janeiro'
// birthCity = 'Minas'
let birthYear = 1988
birthYear = 2030
console.log(name);
console.log(birthCity);
console.log(birthYear);

// Parte 3
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

var base = 5;
var altura = 8;
var area = (base*altura);
console.log(area);
var perimetro = 5+5+8+8;
console.log(perimetro);

// Parte 4
let status = undefined
let notaFinal = 90

if (notaFinal >= 80) {
    status = 'aprovado'
} else if ( notaFinal <= 80 && notaFinal >= 60) {
    status = 'lista'
} else {
    status = 'reprovado'
}

switch (status) {
    case 'aprovado':
        console.log('Parabéns, você foi aprovada(o)!')    
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera')    
        break;
    case 'reprovado':
        console.log('Você foi reprovada(o)')    
        break;
    default:
        console.log('não se aplica')    
}