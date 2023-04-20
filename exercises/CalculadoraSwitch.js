let valor1 = 12
let valor2 = 12
let calculo = '+'

switch(valor1, valor2, calculo) {
    case '+' :
        console.log(valor1 + valor2)
        break
    case '-' :
        console.log(valor1 - valor2)
        break
    case '*' :
        console.log(valor1 * valor2)
        break
    case '/' :
        console.log(valor1 / valor2)
        break
    default:
        console.log('Operação inválida')
}