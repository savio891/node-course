//let and const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Template String
const product = 'iPad'
console.log(`${product} is expensive!`)

//Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {age: ag, name} = {name: 'Anna', age: 9}
console.log(ag, name)