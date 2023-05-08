//ESB: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//improvements in Literal Notation
const name = 'Karla'
const people = {
    name, 
    hello() {
        return 'Hi guys!'
    }
}
console.log(people.name, people.hello())

//Class
class animal {}
class dog extends animal {
    speak() {
        return 'Au au!'
    }
}

console.log(new dog().speak())