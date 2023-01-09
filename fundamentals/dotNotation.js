console.log(Math.ceil(6.9));

const obj1 = {};
obj1.name = 'Ball';
console.log(obj1.name);

function Obj (name) {
    this.name = name;
    this.exec = function() {
    console.log('Exec...');
    }
}

const obj2 = new Obj ('chair');
const obj3 = new Obj ('Table');
const obj4 = new Obj (123);
console.log(obj2.name);
obj2.exec();