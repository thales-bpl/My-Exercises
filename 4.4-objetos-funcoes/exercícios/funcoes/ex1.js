function verificaPalindromo(palavra) {
    for (index = 0; index < palavra.length; index += 1) {
        if (palavra[index].toLowerCase() === palavra[palavra.length - 1 - index].toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(verificaPalindromo('Arara'))

if (verificaPalindromo('Arara') === true) {
    console.log('Sou um palíndromo');
} else {
    console.log('Não sou um palíndromo');
}





