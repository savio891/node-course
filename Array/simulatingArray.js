const almostArray = {0: 'Raphael', 1: 'Anna', 2: 'Bya'}
console.log(almostArray)

Object.defineProperty(almostArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(almostArray[0])

const myArray = ['Raphael', 'Anna', 'Bya']
console.log(almostArray.toString(), myArray)