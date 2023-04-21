function dinheiro(valorRequisitado) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0

    if(valorRequisitado > 0) {
        nota100 = Math.floor(valorRequisitado / 100)
        valorRequisitado = valorRequisitado % 100  //Math.floor(arrendoda para baixo), Math.ceil(arredonda para cima)

        nota50 = Math.floor(valorRequisitado / 50)
        valorRequisitado = valorRequisitado % 50

        nota10 = Math.floor(valorRequisitado / 10)
        valorRequisitado = valorRequisitado % 10

        nota5 = Math.floor(valorRequisitado / 5)
        valorRequisitado = valorRequisitado % 5

        nota1 = Math.floor(valorRequisitado / 1)
        valorRequisitado = valorRequisitado % 1
    }else {
        console.log('Valor inválido!')
    }

    if(nota100 > 0) {
        console.log(`${nota100} nota(s) de R$ 100,00`)
    }
    if(nota50 > 0) {
        console.log(`${nota50} nota(s) de R$ 50,00`)
    }
    if(nota10 > 0) {
        console.log(`${nota10} nota(s) de R$ 10,00`)
    }
    if(nota5 > 0) {
        console.log(`${nota5} nota(s) de R$ 5,00`)
    }
    if(nota1 > 0) {
        console.log(`${nota1} nota(s) de R$ 1,00`)
    }
}

dinheiro(256)