function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            if(numerosProibidos.includes(aleatorio)) {
                reject('Número repetido!')
            }else{
                resolve(aleatorio)
            }
    })
}

async function gerarMegasena(qtddeNumeros, tentativas = 1) {
    try {
    const numeros = []
    for(let _ of Array(qtddeNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1,60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 100) {
            throw "Não deu  certo!"
        }else {
         return gerarMegasena(qtddeNumeros, tentativas + 1)
        }
    }
}

gerarMegasena(25)
    .then(console.log)
    .catch(console.log)

