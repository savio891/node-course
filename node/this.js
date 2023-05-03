console.log(global === this)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Iniside a function...')
    console.log(this === exports) //Dentro de uma função o this não aponta para o exports e module exports.
    console.log(this === module.exports)
    console.log(this === global) //This dentro de uma função aponta para o escopo global, é recomendável utiilizar this fora da função.
}

logThis()

