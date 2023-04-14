const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilots.pop() //Massa beat the car!
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() //remove first array element!
console.log(pilots)

pilots.unshift('Hamilton')
console.log(pilots)

//splice can add and remove elements
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

//remove 
pilots.splice(3, 1) //Massa beat again!
console.log(pilots)

const somePilots1 = pilots.slice(2) //get new array from index 2
console.log(somePilots1)

const somePilots2  = pilots.slice(1, 4) //create a new array starting at index 1 to index 4, but don't include element 4 from the original array (pilots)
console.log(somePilots2)