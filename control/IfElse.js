const printResult = function (nota) {
    if(nota >= 7) {
        console.log('Approved!')
    } else {
        console.log('Reproved!')
    }
}

printResult(10)
printResult(6)
printResult('Ops!')
