let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'test'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//creating a crazy variable: without var and let!
abc = 3 //don't do this at home!!!
console.log(global.abc)

//module.exports - { e: 456, f: false, g: 'teste'}