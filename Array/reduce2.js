const students = [
    {name: 'Joan', note: 7.3, scholar: false},
    {name: 'Maria', note: 9.2, scholar: false},
    {name: 'Pedro', note: 9.8, scholar: true},
    {name: 'Anna', note: 8.7, scholar: true},
]

//Challenge 1: all students are scholarship holders?
const AllScholarHolders = (result, scholar) => result && scholar
console.log(students.map(e => e.scholar).reduce(AllScholarHolders))

//Challenge 2: some student is scholarship holder?

const someScholar = (result, scholar) => result || scholar
console.log(students.map(e => e.scholar).reduce(someScholar))

