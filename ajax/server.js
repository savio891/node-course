const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //Tracks all application static files.
app.use(bodyParser.urlencoded({extended: true})) //Any request that arrives the data will be converted by the body-parser.
app.use(bodyParser.json()) //Transforms the JSON in the request body into an object.

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) 
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('An error has ocurred.')
        }

        res.send('Sucessfully concluded.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query (parOuImpar?numero=3)
    //req.params (parOuImpar:numero)
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Running...'))
