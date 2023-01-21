function getRandomIntegerBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
let option = 0
do {
    option = getRandomIntegerBetween(0, 10)
    console.log(`This number is ${option}.`)
}while(option != 9)

console.log('End!')