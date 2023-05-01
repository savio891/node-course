//Object.preventExtensions, keep to modify datas of objects or delete, but he doesn't add news datas.
const product = Object.preventExtensions({ 
    name: 'Any', price: '1.99', tag: 'promotion'
})
console.log('Extensible', Object.isExtensible(product))

product.name = 'Rubber'
product.descrition = 'Rubber white school'
delete product.tag
console.log(product)

//Object.seal, it is not possible to add or delete datas this object, but to keep modify datas. 

const person = {name: 'July', age: 35}
Object.seal(person)
console.log('Selado', Object.isSealed(person))

person.lastName = 'Silva'
delete person.name
person.age = 29
console.log(person)

//Object.freeze = seal + constant values