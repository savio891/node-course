const students = [
    {name: 'Joan', note: 7.3, scholar: false},
    {name: 'Maria', note: 9.2, scholar: true},
    {name: 'Pedro', note: 9.8, scholar: false},
    {name: 'Anna', note: 8.7, scholar: true},
]

console.log(students.map(a => a.note))
const result = students.map(a => a.note).reduce(function(acumulator, current) { //acumulator [index 0], current [index 1]
     console.log(acumulator, current)
     return acumulator + current
}, 10)

console.log(result)