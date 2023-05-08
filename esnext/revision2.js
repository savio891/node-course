//Arrow Function
const sum = (a, b) => a + b
console.log(sum(2,3))

//Arrow Function (this)
const lexic1 = () => console.log(this === exports)//This inside a arrow function points to module.exports.
const lexic2 = lexic1.bind({})// using bind to make this point to the object is not possible.
lexic1()
lexic2()

//default parameter
function log(text = 'Node') {
    console.log(text)
}

log()
log('I am stronger!')

//rest operator 
function total(...numbers) {
    let total = 0
    numbers.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))