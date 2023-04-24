const valoresNumericos = [1, 3, 4, 8, 12]


function retornoVetoresMultiplicacao(valoresNumericos, multiplicador) {
    for(let i in valoresNumericos) {
        valoresNumericos[i] = valoresNumericos[i] * multiplicador
    }
    console.log(valoresNumericos)
}

retornoVetoresMultiplicacao(valoresNumericos, 2)

function retornoVetoresMultiplicacaoSe(valoresNumericos, multiplicador) {
    for(let i in valoresNumericos) {
        if(valoresNumericos[i] > 5) {
        valoresNumericos[i] = valoresNumericos[i] * multiplicador
        }
    }
    console.log(valoresNumericos)
}
retornoVetoresMultiplicacaoSe(valoresNumericos, 0)