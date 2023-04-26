function progressaoAritmetica(a1, n, r) {
    let enesimoTermo = a1 + (n - 1) * r
    let somaTermos = ((a1 + enesimoTermo) * n) / 2
    console.log(somaTermos)
}

progressaoAritmetica(2, 8, 16)


function progressaoGeometrica(a1, q, n) {
    let enesimoTermo = a1 * Math.pow(q, (n - 1))
    let somaTermos  = a1 * (Math.pow(q, n) -1) / (q - 1) //Utilizar parênteses prioriza valores que estão dentro deles. No caso de (q - 1) é priorizado esta subtração, depois é que acontece a multiplicação entre a1 e Math. Por último ocorre a divisão entre o resultado da multiplicação do Math e (q - 1).
    console.log(`O último termo dessa progressão é ${enesimoTermo}. A soma dos seus termos é ${somaTermos}.`)
}

progressaoGeometrica(7, 3, 5)
