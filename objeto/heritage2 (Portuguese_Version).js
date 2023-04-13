const carro = {
    VelAtual: 0,
    VelMax: 150,
    acelerar(delta) {
        if(this.VelAtual + delta <= this.VelMax) {
            this.VelAtual += delta
        }else {
            this.VelAtual = this.VelMax
        }
    },
    status() {
        return `${this.VelAtual}Km/h de ${this.VelMax}Km/h`
        }
}

const ferrari = {
    Modelo: 'F40',
    VelMax: 320
}

const volvo = {
    Modelo: 'A90',
    status() {return `${this.Modelo}: ${super.status()}`}
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
//ferrari.acelerar(320)
//volvo.acelerar(200)
//console.log(ferrari.status())
//console.log(volvo.status())
console.log(volvo.__proto__)