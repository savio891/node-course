const notes = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//without callback

const LowNotes1 = []
for (let i in notes) {
    if (notes [i] < 7) {
        LowNotes1.push (notes[i])
    }
}
console.log(LowNotes1)

//with callback

const LowNotes2 = notes.filter(function (note) {
    return note < 7
})
console.log(LowNotes2)

const noteLessThan7 = note => note <7

const LowNotes3 = notes.filter(noteLessThan7)
console.log(LowNotes3)

