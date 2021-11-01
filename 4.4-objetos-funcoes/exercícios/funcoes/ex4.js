function maiorNome (nomes) {
    nomeGrande = 0
    for (let index in nomes) {
        if (nomes[index].length > nomes[nomeGrande].length) {
            nomeGrande = index
        }
    }
    return nomes[nomeGrande]
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))