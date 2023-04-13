//Prototype chain
Object.prototype.attr0 = '0' //Not recommended

const grandFather = {attr1: 'A'}
const father = {__proto__: grandFather, attr2: 'B', attr3: '3'}
const son = {__proto__: father, attr3: 'C'}
console.log(son.attr0, son.attr1, son.attr2, son.attr3)

const car = {
    CurrentSpeed: 0,
    MaxSpeed: 200,
    speedUp(delta) {
        if(this.CurrentSpeed + delta <= this.MaxSpeed) {
            this.CurrentSpeed += delta
        }else {
            this.CurrentSpeed = this.MaxSpeed
        }
    },
    status() {
        return `${this.CurrentSpeed}Km/h de ${this.MaxSpeed}Km/h`
    }
}

const ferrari = {
    model: 'F40',
    MaxSpeed: 324 //shadowing
}

const volvo = {
    model: 'V40',
    status() {return `${this.model}: ${super.status()}`}
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)
console.log(ferrari)
console.log(volvo)

volvo.speedUp(100)
console.log(volvo.status())

ferrari.speedUp(300)
console.log(ferrari.status())