const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

function QuantidadeIntervaloNumerosVetor(vetor) {
    let intervalo = 0
    let foraIntervalo1 = 0
    let foraIntervalo2 = 0
    const arrayIntervalo = vetor.slice(9, 20)
    const arrayIntervaloFora1 = vetor.slice(0, 9)
    const arrayIntervaloFora2 = vetor.slice(20, 30)

    for(let i = 0; i < arrayIntervalo.length; i++) {
        intervalo++
    }

    console.log(`Foram detectados ${intervalo} números dentro do intervalo ${arrayIntervalo}`)

    for(let i = 0; i < arrayIntervaloFora1.length; i++) {
        foraIntervalo1++
    }

    console.log(`Foram detectados ${foraIntervalo1} números fora do intervalo ${arrayIntervalo}`)

    for(let i = 0; i < arrayIntervaloFora2.length; i++) {
        foraIntervalo2++
    }

    console.log(`Foram detectados ${foraIntervalo2} números fora do intervalo ${arrayIntervalo}`)

}

QuantidadeIntervaloNumerosVetor(vetor)