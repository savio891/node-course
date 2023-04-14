const cart = [
    '{"name" : "Rubber", "price" : 3.45} ',
    '{"name" : "Journal", "price" : 13.45 }',
    '{"name" : "Pencil Kit", "price" : 41.22 }',
    '{"name" : "Pen", "price" : 7.59 }'
]

const toObject = json => JSON.parse(json)
const onlyPrice = product => product.price

const result = cart.map(toObject).map(onlyPrice)
console.log(result)