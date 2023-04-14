//Array is a object
console.log(typeof Array, typeof new Array, typeof [])

let approveds = new Array('Bya', 'Carllos', 'Anna')
console.log(approveds)

approveds = ['Bya', 'Carllos', 'Anna']
console.log(approveds[0])
console.log(approveds[1])
console.log(approveds[2])
console.log(approveds[3])

approveds[3] = 'Paul'
approveds.push('Aby')
console.log(approveds.length)

approveds[9] = 'Raphael'
console.log(approveds.length)
console.log(approveds[8] === undefined)

console.log(approveds)
approveds.sort()
console.log(approveds)

delete approveds[1]
console.log(approveds[1])
console.log(approveds[2])

approveds = ['Bya', 'Carlos', 'Anna']
approveds.splice(1, 0, "Element1") //(x , y, "z") => X: seleect indice number of array; Y: delete numbers of array set to y value; Z: add new elements to the array.
console.log(approveds)