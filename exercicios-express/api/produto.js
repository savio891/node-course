module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send('Produto > savar > ' + texto)
    }

    function obter(req, res) {
        res.send('Produto > obter > ' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}