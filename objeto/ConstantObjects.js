// people => 123 => {...}
const people = {name: 'João'}
people.name = 'Pedro'

//people => 456 => {...}
//people = {nome: 'Ana'}

Object.freeze(people)

people.name = 'Maria'
people.address = 'ABC Street'
delete people.name

console.log(people.name)
console.log(people)

const ConstantPeople = Object.freeze({name: 'João'})
ConstantPeople.name = {name: 'Maria'}
console.log(ConstantPeople)