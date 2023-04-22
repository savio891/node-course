function valorAnuidade(mes, valor) {
    let montante = valor * Math.pow((1 + 0.05), mes -1)
    return montante.toFixed(2)
}

console.log(valorAnuidade(1, 100))
console.log(valorAnuidade(2, 100))
console.log(valorAnuidade(3, 100))
console.log(valorAnuidade(4, 100))