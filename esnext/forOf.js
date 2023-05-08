for (let letter of 'Cod3r') {
    console.log(letter)
}

const mattersEcma = ['Map', 'Set', 'Promise']

for (let i in mattersEcma) {
    console.log(i)
}

for (let matter of mattersEcma) {
    console.log(matter)
}

const mattersMap = new Map([
     ['Map', {approached: true}],
     ['Set', {approached: true}],
    ['Promise', {approached: false}]
])

for (let matter of mattersMap) {
    console.log(matter)
}

for (let key of mattersMap.keys()) {
    console.log(key )
}

for (let value of mattersMap.values()) {
    console.log(value)
}

for (let [k, vl] of mattersMap.entries()) {
    console.log(k, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letter of s) {
    console.log(letter)
}
