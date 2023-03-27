class person {
    constructor(name) {
    this.name = name        
    }

speak() {
    console.log(`My name is ${this.name}`)
    }
}

const p1 = new person('João')
p1.speak()

const createPerson = name => {
    return{
        speak: () =>console.log(`My name is ${name}`)
    }
}
const p2 = createPerson('João')
p2.speak()