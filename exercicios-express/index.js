const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Guilherme'))

app.use((req, res, next) => {
    console.log('Antes...')
    next();
})

app.post('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, resp, next) => {
    console.log('Durante...')
    resp.json({
        data:  [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })

    next();

    // resp.json({
    //     name: 'iPad 32GB',
    //     price: 1899.00,
    //     discount: 0.12
    // })

    // resp.send('<h1>Estou bem!</h1>')
})

app.use('/opa', (req, res) => {
    console.log('Depois...')
})


app.listen(3000, () => {
    console.log('Backend Executando...')
})