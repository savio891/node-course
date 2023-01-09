//function has not return
function printSum (a, b) {
    console.log(a + b)
}
printSum (2,3);
printSum (2);

//function has return
function sum (a, b = 77) {
    return a + b
}

console.log(sum(2));
console.log(sum());