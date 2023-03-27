// closure is the scope created when a function is declared
//this scope allows to access the function and manipulate external variables to the function

//Lexic context in action!

const x = 'global'
function out() {
    const x = 'local'
    function inside (){
        return x
    } return inside
}

const myfunction = out()
console.log(myfunction())

