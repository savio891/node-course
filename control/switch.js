const printResult = function (note) {
    switch (Math.floor(note)) {
        case 10:
        case 9:
            console.log('Honor board')
            break
        case 9: case 8: case 7:
            console.log('Approved!')
            break
        case 6: case 5: case 4:
            console.log('Recuperation')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reproved!')
            break
        default: 
            console.log('Invalid Note')
    }
}

printResult(10)
printResult(8.9)
printResult(5.4)
printResult(-1)