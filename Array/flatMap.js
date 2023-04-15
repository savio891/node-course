const school = [{
    name: 'Turma M1',
    students: [{
        name: 'Gustavo',
        note: 8.1
    }, {
        name: 'Anna',
        note: 9.3
    }]
    }, {
        name: 'Turma M2',
        students: [{
            name: 'Rebeca',
            note: 8.9
        }, {
            name: 'Robert',
            note: 7.3
    }]
}]

const getStudentNotes = student => student.note
const getclassNotes = turma => turma.students.map(getStudentNotes)

const Notes1 = school.map(getclassNotes)
console.log(Notes1)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notes2 = school.flatMap(getclassNotes)
console.log(notes2)
