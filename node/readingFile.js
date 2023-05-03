const fs = require('fs') //Internal Node File System Module.


const path = __dirname + '/file.json'

//synchronous...
const content = fs.readFileSync(path, 'utf-8')
console.log(content)

//asynchronous...
fs.readFile(path, 'utf-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

fs.readdir(__dirname, (err, files) => {
    console.log('Content folder...')
    console.log(files)
})