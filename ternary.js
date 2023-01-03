const result = note => note >= 7 ? 'Allow' : 'Deny'

console.log(result(7.1))
console.log(result(5.8))

const result2 = note => {
    return note >= 7 ? 'Allow' : 'Deny'
}

console.log(result2(1))