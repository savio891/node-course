// Dynamic collection of pairs key/value

const product = new Object
product.name = 'Chair'
product['product brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']

console.log(product)

const car = {
    model: 'A4',
    value: 89000,
    owner: {
        name: 'Eduardo',
        age: 65,
        address: {
            publicPlace: 'ABC Street',
            number: 123
        }
    },
    drivers: [{
        name: 'Beto',
        age: 59
    }, {
        name: 'Regina',
        age: 55
    }],

    calculateInsuranceAmount: function () {}
}

car.owner.address.number = 1000
car['owner'] ['address'] ['publicPlace'] = 'Gigant Avenue'


//delete car.drivers
delete car.owner.address
delete car.calculateInsuranceAmount
console.log(car)
console.log(car.drivers.length)
