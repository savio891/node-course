const clientes = [
    {name: 'Fábio', idade: 15, logradouro: {Rua: 'Abc', bairro: 'Capim verde', numero: 168}},
    {name: 'Victor', idade: 32, logradouro: {Rua: 'Enzza', bairro: 'Lombo Brejo', numero: 559}},
    {name: 'Fabiana', idade: 22, logradouro: {Rua: 'Jafariz', bairro: 'Flores', numero: 250}}
]

const ruas = clientes.map(r => r.logradouro.Rua)
const bairros = clientes.map(r => r.logradouro.bairro)
const idades = clientes.map(r => r.idade)

const maisVelho = velho => velho.idade > 20
const casaMaior = casa => casa.logradouro.numero > 200
console.log(clientes.filter(casaMaior))