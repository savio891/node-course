let double = function () {
    return 2 * a
}

double = (a) => {
    return 2 * a
}

double = a => 2 * a 
console.log(double(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá'
console.log(ola())