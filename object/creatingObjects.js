//using the literal notation
const obj1 = {}
console.log(obj1)

//Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Constructive functions
function Product(name, price, discount) {
    this.name = name //Making this attribute a public attribute.
    this.getPriceWithDiscount = () => {
        return price * (1 - discount)
    }
}

const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.89, 0.25)
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount())

//Factory Function
function createEmployees(name, baseSalary, absences) {
    return {
        name,
        baseSalary,
        absences,
        getSalary() {
            return (baseSalary / 30) * (30 - absences)
        }
    }
}
const f1 = createEmployees('João', 7980, 4)
const f2 = createEmployees('Maria', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

//object.create

const daughter = Object.create(null)
daughter.nome = 'Anna'
console.log(daughter)

//A famous function that return Object
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
