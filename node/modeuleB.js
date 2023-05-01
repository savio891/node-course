let a = 2 //essa variável é visível apenas dentro do module.exports.

module.exports = { //Não é permitdo usar this ou outros atributos para armazenar dados em objetos do tipo module.exports.
    goodMorning: 'Good Morning',
    goodNight() {
        return 'Good Night'
    }
}