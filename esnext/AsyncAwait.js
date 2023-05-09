//with promises...
const http = require('http')

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((solve, reject) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', datas => {
                result += datas
            })
    
            res.on('end', () => {
                try {
                    solve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Resource of ESB
//Goal of simplifying the use of Promises...
let getStudents = async () => {
    const classA = await getClass('A')
    const classB = await getClass('C')
    const classC = await getClass('C')
    return [].concat(classA,classB,classC)
}//Return an AsyncFunction object

getStudents()
.then(students => students.map(a =>a.nome))
.then(names => console.log(names))