function SistemaNotas(nota) {
    let arredondar = Math.ceil(nota / 5) * 5

    if(nota > 35 && nota < 40) {
        console.log(arredondar)
        return `Parabéns, nota arredondada!! A sua nota era ${nota}.`
    }
    else if(nota <= 35) {
        console.log('reprovado!')
        return nota
    }else if(nota >= 40) {
        console.log('aprovado!')
        return nota
    }

}
console.log(SistemaNotas(36))