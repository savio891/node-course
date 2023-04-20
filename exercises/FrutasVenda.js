let frutasDisponíveis = 'nn'

switch(frutasDisponíveis) {
    case 'maçã':
        console.log('Não vendemos esta fruta aqui.')
        break
    case 'kiwi':
        console.log('Estamos com escassez de kiwis.')
        break
    case 'melancia':
        console.log('Aqui está, são três reais o quilo.')
        break
    default:
        console.log('Erro.')
}