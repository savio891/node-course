const vetorNumeros = [12, -44, 58, -14, -38, -85, 44, 59, -77]

function quantidadeNumerosNegativos(vetorNumeros) {
    let negativos = 0
    let positivos = 0
    for(i = 0; i < vetorNumeros.length; i++) {
        vetorNumeros[i] < 0 ? negativos++ : positivos++
    }

    console.log(`Há ${negativos} números negativos e ${positivos} números positivos nesse vetor.`)
}

quantidadeNumerosNegativos(vetorNumeros)