Array.prototype.reduce3 = function(callback, InitiialValue) {
    const initialIndex = InitiialValue ? 0 : 1 
    let acumulator = InitiialValue || this[0]
    for(let i = initialIndex; i < this.length; i++) {
        acumulator = callback(acumulator, this[i], i, this)
    }
    return acumulator
}

const sum = (total, value) => total + value
const numbs = [1, 2, 3, 4, 5, 6]
console.log(numbs.reduce(sum, 21))