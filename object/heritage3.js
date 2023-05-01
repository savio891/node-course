const father = {name: 'Pedro', colorHair: 'black'}

const daughter1 = Object.create(father)
daughter1.name = 'Anna'
console.log(daughter1.colorHair)

const daughter2 = Object.create(father, {
    name: {value: 'Bya', writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = 'Renata'
console.log(`${daughter2.name} has ${daughter2.colorHair} hair`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for(let key in daughter2) {
    daughter2.hasOwnProperty(key) ?
    console.log(key) : console.log(`By inheritance: ${key}`)
}