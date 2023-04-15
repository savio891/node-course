const students = [
    {name: 'Joan', note: 7.9},
    {name: 'Mary,', note: 9.2}
]

//Imperative how to make?
let total1 = 0
for(let i = 0; i < students.length; i++) {
    total1 += students[i].note
}

console.log(total1 / students.length)

//Declarative what to do?
const getNote = student => student.note
const sum = (total, atual) => total + atual
const total2 = students.map(getNote).reduce(sum)
console.log(total2 / students.length)
