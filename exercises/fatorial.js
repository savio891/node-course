function Fatorial(n) {
    if(n === 0 || n === 1) {
        return 1
    }
    let resultado = n
    let primeiroMultiplicador = n - 1
    for( let i = primeiroMultiplicador; i > 1; i--) {
        resultado *= i //colocar o return dentro do laço for faz com que o resultado seja exibido antes do término do laço, ou seja, antes de terminar a desincrementação do valor i. Assim o resultado será 20, isto é, i com valor estático.
        
    }
   return resultado
}
console.log(Fatorial(5))

function calcularFatorialRecursivamente(n) {
    if(n === 1) {
        return 1
    }

    return n * calcularFatorialRecursivamente (n - 1)
}

function calcularFatorial(fatorial) {
    if(isNaN(fatorial)) {
        return 'Não existe fatorial de um texto'
    }

    else if(!Number.isInteger(fatorial) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural'
    }
    else if(fatorial === 0 || fatorial === 1) {
        return 1
    }
    return calcularFatorialRecursivamente(fatorial)
}
console.log(calcularFatorial(10))