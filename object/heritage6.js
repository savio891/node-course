function Class (name, videoID) {
    this.name  = name
    this.videoID = videoID
}

const class1 = new Class('Welcome', 123) //Prototype created points to the function Class.
const class2 = new Class('see you soon', 456) //Prototype created points to the function Class.
console.log(class1, class2)

//simulating the new

function New(f,...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const class3 = New(Class, 'Welcome', 123)
const class4 = New(Class, 'see you soon', 456)
console.log(class3, class4)
