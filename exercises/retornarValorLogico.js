const retornarValorLógico = function (num) {

    for(let i = 2; i < num; i++) {

        let inteiro = Number.isInteger(num)
        let positivo = num > 0
        let naoPrimo = num % i === 0

        if(naoPrimo && inteiro && positivo ) {
            return true
        }else if (!naoPrimo){
            return false
        }
    }
    return num > 1
}

console.log(retornarValorLógico(4))