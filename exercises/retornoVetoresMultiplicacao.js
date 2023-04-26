const valoresNumericos = [1, 3, 4, 8, 12]


function retornoVetoresMultiplicacao(valoresNumericos, multiplicador) {
    for(let i in valoresNumericos) {
        valoresNumericos[i] = valoresNumericos[i] * multiplicador
    }
    console.log(valoresNumericos)
}



function retornoVetoresMultiplicacaoSe(valoresNumericos, multiplicador) {
    for(let i in valoresNumericos) {
        valoresNumericos[i] = valoresNumericos[i] * multiplicador
        }
    if(multiplicador > 5) {
        console.log(valoresNumericos)
    }else{
        console.log(`Valor inválido!!`)
    }
}

retornoVetoresMultiplicacaoSe(valoresNumericos, 5)