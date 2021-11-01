// Exercício 6
let chessPiece = String
chessPiece = "Rainha"
let lowChessPiece = chessPiece.toLowerCase()

switch (lowChessPiece) {
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