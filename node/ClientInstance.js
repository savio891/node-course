const counterA = require('./singleInstance')// O Node faz cache de objetos iguais criados, retornam o mesmo valor.
const counterB = require('./singleInstance')

const counterC = require('./NewInstance')()//O Node não faz cache de novas instâncias a partir de uma factory.
const counterD = require('./NewInstance')()

counterA.init()
counterA.init()
console.log(counterA.value, counterB.value)

counterC.init()
counterC.init()
console.log(counterC.value,counterD.value)