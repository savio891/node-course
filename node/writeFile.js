const fs = require('fs')

const product = {
    name: 'cellphone',
    price: 1249.99,
    discount: 0.15
}

fs.writeFile(__dirname + '/generatorFile.json', JSON.stringify(product), err => {
    console.log(err || 'File saved!')
})
