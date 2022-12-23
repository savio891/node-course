const salutation = 'Opa';

function exec() {
    const salutation = 'Falaa';
    return salutation;
}
//Objects are nested groups of pairs name/value:
const client = {
    name: 'Pedro',
    age: 32,
    weight: 90,
    adress: {
        public_Place: 'Street Very Cool',
        number: 123
    }
}
console.log(salutation);
console.log(exec());
console.log(client);