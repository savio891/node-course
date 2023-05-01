const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const Chineses = f => f.pais === 'China'
const Women = f => f.genero === 'F'
const LowSalary = (empl, emplCurrent) => {
    return empl.salario < emplCurrent.salario ? empl : emplCurrent
}

axios.get(url).then(response => {
    let employees = response.data
    console.log(employees)

    const func = employees
    .filter(Chineses)
    .filter(Women)
    .reduce(LowSalary)

    console.log(func)
})