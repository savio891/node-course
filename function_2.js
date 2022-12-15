//store a function in variable
const printSum = function (a,b) {
    console.log(a + b)
}

printSum (2,3);

//store an arrow function in variable
const sum = (a, b) => {
    return a + b
}

console.log(sum(2,3));

//implict return
const subtraction = (a,b) =>  a - b
console.log(subtraction(2,3));