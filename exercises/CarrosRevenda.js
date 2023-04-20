let TipoVeículo = 'Hatch'

switch(TipoVeículo) {
    case 'Hatch':
        console.log('Compra efetuada com sucesso!')
        break
    case 'Sedans':
        console.log('Tem certeza que não prefere este modelo?')
        break
    case 'Motoclicletas':
        console.log('Tem certeza que não prefere este modelo?')
        break
    case 'Caminhonetes':
        console.log('Tem certeza que não prefere este modelo?')
        break
    default:
        console.log('Não trabalhamos com este tipo de automóvel aqui.')
}