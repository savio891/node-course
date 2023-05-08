//operator ... rest(join)/spread(spread)
//use rest with a parameter of function

//to use spread with object
const employee = {name: 'Maria', salary: 12348.99}
const clone = {active: true, ...employee}
console.log(clone)

//to use spread with array
const groupA = ['Joan', 'Pedro', 'Glorya']
const Finalgroup = ['Maria', ...groupA,'Raphaela']
console.log(Finalgroup)