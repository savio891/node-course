const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Database = require('./database')

app.use(bodyParser.urlencoded({extended: true})) //Se for no formato url, o body-parser converterá todo o corpo da requisição para objeto.

app.get('/products', (req, res, next) => {
    res.send(Database.getProducts())
})

app.get('/products/:id', (req, res, next) => {
    res.send(Database.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = Database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.put('/products/:id', (req, res, next) => {
    const product = Database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON
})

app.delete('/products/:id', (req, res, next) => {
    const product = Database.deleteProduct(req.params.id)
    res.send(product) //JSON
})

app.listen(port, () => {
    console.log(`Server is running in the port ${port}`)
})