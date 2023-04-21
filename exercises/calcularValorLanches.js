function calcularItens(codigo, quantidade) {

    switch(codigo) {
        case 100:
            this.preco = quantidade * 3
            console.log(`Cachorro quente no valor de R$${this.preco.toFixed(2)}`)
            break
        case 200:
            this.preco = quantidade * 4
            console.log(`Hambúrguer Simples no valor de R$${this.preco.toFixed(2)}`)
            break
        case 300:
            this.preco = quantidade * 5.50
            console.log(`Cheeseburguer no valor de R$${this.preco.toFixed(2)}`)
            break
        case 400:
            this.preco = quantidade * 7.50
            console.log(`Bauru no valor de R$${this.preco.toFixed(2)}`)
            break
        case 500: 
            this.preco = quantidade * 3.50
            console.log(`Refrigerante no valor de R$${this.preco.toFixed(2)}`)
            break
        case 600:
            this.preco = quantidade * 2.80
            console.log(`Suco no valor de RS${this.preco.toFixed(2)}`)
            break
        default:
            console.log(`${codigo} não identificou nenhum produto!`)
    }
}

calcularItens(100, 500)
console.log(typeof calcularItens)