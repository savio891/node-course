function getRandomIntegerBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
 let option = 0
 while(option != 9) {
    option = getRandomIntegerBetween(0, 10)
    console.log(`This number is ${option}.`)
    if(option >= 8) {
        console.log('Excellent!')
    } else if (option >= 6) {
        console.log('Good')
    } else if (option >= 4) {
        console.log('Average')
    } else if (option  <= 3) {
        console.log('Loser!')
    }
 }

 console.log('You are a winner!')