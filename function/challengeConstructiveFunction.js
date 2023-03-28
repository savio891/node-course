function person(name) {
    this.name = name
    this.falar = function() {
        console.log(`My name is ${name}`)
    }
}
const p1 = new person('João')
p1.falar()
console.log(p1.name)

const p2 = new person('Pedro')
p2.falar()