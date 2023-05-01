const ferrari = {
    model: 'F40',
    MaxSpeed: 324

}

 const volvo = {
    model: 'V40',
    MaxSpeed: 200
 }

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MyObject() {}
console.log(typeof Object, typeof MyObject)
console.log(Object.prototype, MyObject.prototype)