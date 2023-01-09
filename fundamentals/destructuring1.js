//new resource of ES2015

const person = {
    name: 'Ana',
    age: 5,
    adress: {
        publicPlace: 'Street ABC',
        number: 1000
    }
}

const {name, age} = person
console.log(name, age)

const {name: n, age: a} = person
console.log(n,a)

const {lastName, goodTempered = true } = person
console.log(lastName, goodTempered)

const {adress: {publicPlace, number, zipCode } } = person
console.log(publicPlace, number, zipCode)