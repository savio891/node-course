function salarioPlanoTrabalho(planoTrabalho, salarioAtual) {
    
    switch(planoTrabalho) {
        case 'A':
             let aumentoA = salarioAtual * 0.10
             console.log(salarioAtual + aumentoA)
             break
        case 'B':
            let aumentoB = salarioAtual * 0.15
            console.log(salarioAtual + aumentoB)
            break
        case 'C':
            let aumentoC = salarioAtual * 0.20
            console.log(salarioAtual + aumentoC)
            break
        default:
            console.log(`O plano ${planoTrabalho} é inválido`)
    }
}

salarioPlanoTrabalho('A', 3500)