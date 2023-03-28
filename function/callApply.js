function getPrice(tax = 0.1, coin = '$') {
    return `${coin} ${this.price * (1 - this.disc) * (1 + tax)}`
}

const product = {
    name: 'Notebook',
    price: 4999.99,
    disc: 0.15,
    getPrice
}
global.price = 20
global.disc = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = {price: 49990, disc: 0.20}
console.log(getPrice.call(car, 0.10, 'R$'))
console.log(getPrice.apply(car, [0.10, 'R$', 40]))