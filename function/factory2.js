function createProduct(name, price)  {
    return {
        name,
        price,
        discount: 0.1
    }
}
console.log(createProduct('Notebook', 1499.99))
console.log(createProduct('iPad', 1299.99)) 