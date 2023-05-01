const moduleA = require('../../moduleA')
console.log(moduleA.hello)

const c = require('./folderC')
console.log(c.hello2)

const http = require('http')
http.createServer((req, resp) => {
    resp.write('Good Morning!')
    resp.end()
}).listen(8080)