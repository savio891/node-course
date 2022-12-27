function rand ({min = 0, max = 1000}) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))  
console.log(rand({}))
//console.log(rand()) values ​​is not defined, because there are no objects in function
 