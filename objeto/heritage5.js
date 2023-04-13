console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Cod3r School'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//String.prototype.toString = function() { //it is not recommended to replace the default String value with a new custom function.
//   return 'too bad'
//}

console.log('Cod3r School'.reverse())