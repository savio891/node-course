Number.prototype.between = function (initiation, end) {
    return this >= initiation && this <= end
}

const printResult = function (note) {
    if (note.between(9, 10)) {
        console.log('Honor board')
    }else if(note.between(7, 8.99)) {
        console.log('Approved')
    }else if(note.between(4, 6.99)) {
        console.log('Recuperation')
    }else if(note.between(0, 3.99)) {
        console.log('Desaproved')
    }else {
        console.log('Invalid Note')
    }
    console.log('End!')
}

printResult(8.6)
printResult(8.99)
printResult(6.55)
printResult(-1)