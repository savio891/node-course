const { result } = require("lodash")

const technologies = new Map()
technologies.set('react', {framework: false})
technologies.set('angular', {framework: true})

console.log(technologies.react)
console.log(technologies.get('react').framework)

const variablesKeys = new Map([
    [function () {}, 'Function'],
    [{}, 'Object'],
    [123, 'Number'],
])

variablesKeys.forEach((vl, k) => {
    console.log(k, vl)
})

console.log(variablesKeys.has(123))
variablesKeys.delete(123)
console.log(variablesKeys.has(123))
console.log(variablesKeys.size)

variablesKeys.set(123, 'a')
variablesKeys.set(123, 'b')
variablesKeys.set(456, 'b')
console.log(variablesKeys)
