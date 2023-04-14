const numbs = [1, 2, 3 , 4, 5]

//for with  purpose

let result = numbs.map(function(e) { //.map doesn't modify current array, but create a new array.
    return e * 2
})

console.log(result) 

const sum10 = e => e + 10
const triple = e => e * 3
const Money = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = numbs.map(sum10).map(triple).map(Money)
console.log(result)
