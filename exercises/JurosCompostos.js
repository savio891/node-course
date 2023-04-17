function MontanteJurosSimples(capital, taxa, tempoAplica) {
    resultado = capital * taxa * tempoAplica
    return resultado.toFixed(2)
}

console.log(MontanteJurosSimples(1400, 0.07, 2))

function AplicacaoJurosCompostos(montante, taxa, tempoAplica) {
    let formula = Math.pow(1 + taxa, tempoAplica)
    capital = montante / formula
     return capital
}

console.log(AplicacaoJurosCompostos(679.17, 0.02,3))