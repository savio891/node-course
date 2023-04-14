const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'iPad Pro', price: 4199, fragile: true},
    {name: 'glass', price: 12.48, fragile: true},
    {name: 'Plastic glass', price: 18.99, fragile: false}
] 

console.log(products.filter(function(p){
    return false
}))


const expensive = product => product.price >= 500
const Fragile = product => product.fragile

console.log(products.filter(expensive).filter(Fragile))