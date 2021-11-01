// Exercício 7

let nota = Number
nota = 100

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