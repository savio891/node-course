const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')
const inicio = e => console.log('Início...')
const content = e => fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString())) //readFile é executado por último, readfileSync entra em sincronia com a execução de acordo com a ordem.
const fim = e => console.log('Fim...')
const inicioSync = e => console.log('Início Sync...')
const contentSync = e => console.log(fs.readFileSync(caminho).toString())
const fimSync = e => console.log('Fim Sync...')

function exibirConteudo(conteudo) {
   return new Promise(resolve => {
      resolve(conteudo)
   })
}

exibirConteudo()
   .then(inicio)
   .then(content)
   .then(fim)
   .then(inicioSync)
   .then(contentSync)
   .then(fimSync)
