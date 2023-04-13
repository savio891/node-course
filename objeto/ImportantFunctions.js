const people = {
    name: 'Rebeca',
    age: 2,
    peso: 13.
}

console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people))

Object.entries(people).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(people, 'dateOfBirth', {
    enumerable: true,
    writable: false,
    value: '01/01/2023'
})

people.dateOfBirth = '01/01/2017'
console.log(people.dateOfBirth)
console.log(Object.keys(people))

//Object.assign (ECMAScript 2015)

const dest = {a: 1}
const o1 = {b:2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
