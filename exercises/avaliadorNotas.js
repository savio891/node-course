function avaliarNotas(nota) {
    if(nota < 0) {
        console.log('Nota inválida!')
    }
    else if(nota === 0) {
            console.log('Desqualificado!')
    }
    else if(nota <= 4.9) {
        console.log(`Sua nota é ${nota}, conceito D.`)
    }
    else if(nota <= 6.9) {
        console.log(`Sua nota é ${nota}, conceito C.`)
    }
    else if(nota <= 8.9) {
        console.log(`Sua nota é ${nota}, conceito B.`)
    }else if(nota <= 10) {
        console.log(`Sua nota é ${nota}, conceito A.`)
    }
    else if(nota > 10) {
        console.log('Nota inválida!!')
    }
}
avaliarNotas(8.2)