function pagamentoPorIdade (idade) {
    let valorNormalPlano = 100
    let adicional = 0

    if(idade < 10) {
        adicional = 80
        console.log(adicional + valorNormalPlano)
    }
    else if(idade <= 30) {
        adicional = 30
        console.log(adicional + valorNormalPlano)
    }
    else if(idade <= 60) {
        adicional = 95
        console.log(adicional + valorNormalPlano)
    }
    else if(idade > 60)
        adicional = 130
        console.log(adicional + valorNormalPlano)
}

pagamentoPorIdade(8)