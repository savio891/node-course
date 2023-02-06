//Function in JS is First-Class Object (Citizens)
//Higher-order function

//Literally create
function fun1 (c, d) {return c - d }

//Storage in a variable
const fun2 = function (e, f) {return e * f}

//Storage in a array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3), array[1] (5,4,), array[2] (9,10))

//Storage in a object attribute
const obj = {}
obj.speak = function () {return 'Hello!'}
console.log(obj.speak())

//Pass a function as parameter
function run(fun) {
    fun()
}

run(function() { console.log('Running...')})

//A function can return/contain a function
function sum(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

sum(2,3) (6)
const FiveMore = sum(2,3)  
FiveMore(6)